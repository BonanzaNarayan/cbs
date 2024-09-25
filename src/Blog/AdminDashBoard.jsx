import  { useRef, useState } from 'react';
import { db, storage, auth } from '../configs/firebase';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { useEffect } from 'react';

import { IoTrashBinSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io"
import { FaGlobe } from "react-icons/fa";



function AdminDashBoard(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);

    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
      const fetchPosts = async () => {
        const postCollection = collection(db, 'posts');  // Collection reference
        const postSnapshot = await getDocs(postCollection);  // Fetch all documents
        const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));  // Convert documents to an array
        setPosts(postList);  // Store the posts in state
      };
      fetchPosts()
    })
    

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (!user) {
          // If the user is not logged in, redirect to the login page
          navigate('/admin/login');  // Use navigate instead of history.push
        }
      });

      return () => unsubscribe();  // Cleanup the subscription
    }, [navigate]);

    const handleImageUpload = (e) => {
      const files = Array.from(e.target.files);
      setImages(files);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const uploadPromises = images.map(image => {
        const storageRef = storage.ref(`posts/${image.name}`);
        return storageRef.put(image).then(() => storageRef.getDownloadURL());
      });

      Promise.all(uploadPromises)
        .then(urls => {
          db.collection('posts').add({
            title,
            description,
            imageUrls: urls,
            createdAt: new Date()
          });
        });
    };

    const handleLogout = () => {
      auth.signOut().then(() => {
        // Redirect to the login page after logout
        navigate('/blog');
      }).catch((error) => {
        console.log("Error during logout:", error);
      });
    };

      // Store fetched posts

    const handleDelete = async (id) => {
      try {
        await deleteDoc(doc(db, 'posts', id));  // Delete document from Firestore
        setPosts(posts.filter(post => post.id !== id));  // Remove post from state
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    };
  

    const handleEdit = (id) => {
      navigate(`/admin/edit/${id}`);  // Redirect to the edit page for the specific post
    };

    const postMenu = useRef()
    const newPostBtn = ()=>{
      postMenu.current.style.display = "flex"
    }
     const newPostBtnClose = () =>{
      postMenu.current.style.display = "none"
     }

  return (
    <>
      <div>
        <div className='flex align-middle justify-between p-3 flex-wrap bg-white'>
          <a href="/blog" className='bg-gray-800 text-white font-bold p-2 rounded-lg'>Back To Blog</a>

            <div className='flex justify-center gap-4'>
              <a href="/" className='bg-gray-900 p-2 rounded-md text-white text-xl font-bold'>
              <FaGlobe />
              </a>
              <button className='bg-blue-500 p-2 rounded-md text-white text-xl font-bold' onClick={handleLogout}>
                <LuLogOut />
              </button>
            </div>
        </div>

        <div className='relative p-5 flex align-middle justify-between shadow-xl'>
          <h1 className='text-2xl text-gray-900'>Hello Admin 👋</h1>
          <button onClick={newPostBtn} className='bg-blue-500 text-white font-bold p-2 rounded-lg'>
          <IoMdAddCircleOutline />
          </button>
        </div>

        <div ref={postMenu} style={{display: "none"}} className='flex bg-white align-middle justify-center absolute top-0 left-0 w-full h-full'>
          
          <button onClick={newPostBtnClose} className='absolute top-5 right-5 text-xl bg-white shadow-lg p-3 rounded-lg'><IoIosCloseCircle /></button>

          <form onSubmit={handleSubmit} className='flex flex-col mt-5 shadow-xl p-3 w-[80%] gap-4'>

          <h1 className='p-5 text-center text-blue-500 text-2xl font-bold'>New Post</h1>

            <input style={{border: "solid blue 1px"}}
            className='h-[3rem] rounded-md p-3 shadow-md text-black' 
            type="text" value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Title" required/>

            <textarea style={{border: "solid blue 1px"}}
            className='h-[15rem] p-5 text-lg border-b-8 shadow-md rounded-md border-solid border-blue-950'
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required placeholder="Description"></textarea>

            <input className='h-[3rem] rounded-md p-3 shadow-md' type="file" required multiple onChange={handleImageUpload} />

            <button className='bg-blue-600 p-2 text-xl rounded-md shadow-md w-[10rem] text-center text-white' type="submit">Add Post</button>
          </form>

        </div>

        <h3 className='text-center mt-10 text-xl font-bold text-blue-600 underline'>Your Posts</h3>
        <ul className='flex align-middle justify-evenly flex-wrap'>

          {posts.map((post) => (
            <li key={post.id} style={{border: "solid 1px blue"}} className='w-[400px] p-5 shadow-2xl bg-whit flex align-middle justify-between m-5 rounded-lg'>

              {post.imageUrls && post.imageUrls.length > 0 && (
              <img src={post.imageUrls[0]} alt={post.title} className='rounded-md size-20'  />
              )}

              <h4 className='text-lg text-gray-900 '>{post.title}</h4>

              <div className="flex flex-col justify-between">
                <button 
                onClick={() => handleEdit(post.id)} 
                className='p-2 bg-blue-500 text-white rounded-lg'>
                  <FaRegEdit />
                </button>

                <button 
                onClick={() => handleDelete(post.id)} 
                className='p-2 bg-red-500 text-white rounded-lg'>
                  <IoTrashBinSharp />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AdminDashBoard;