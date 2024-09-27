import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, storage } from '../configs/firebase';  // Firestore and Storage
import { doc, getDoc, updateDoc } from 'firebase/firestore';  // Firestore methods
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';  // Storage methods
import { v4 as uuidv4 } from 'uuid';  // For generating unique file names

import { IoTrashBinSharp } from "react-icons/io5";

const EditPost = () => {
  const { id } = useParams();  // Get the post ID from the URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [newImages, setNewImages] = useState([]);  // New images to upload
  const [existingImages, setExistingImages] = useState([]);  // Existing image URLs

  // Fetch post data from Firestore
  useEffect(() => {
    const fetchPost = async () => {
      const postRef = doc(db, 'posts', id);
      const postDoc = await getDoc(postRef);
      if (postDoc.exists()) {
        const postData = postDoc.data();
        setPost(postData);
        setTitle(postData.title);
        setDescription(postData.description);
        setExistingImages(postData.imageUrls || []);
      } else {
        console.log("No such post!");
      }
    };
    fetchPost();
  }, [id]);

  // Handle new image uploads
  const handleImageChange = (e) => {
    setNewImages(e.target.files);
  };

  // Handle deleting an existing image
  const handleDeleteImage = async (imageUrl) => {
    try {
      const imageRef = ref(storage, imageUrl);  // Reference to the image in Firebase Storage
      await deleteObject(imageRef);  // Delete the image from storage
      setExistingImages(existingImages.filter((url) => url !== imageUrl));  // Remove from existingImages array
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  // Handle saving the post with updated images
  const handleSave = async () => {
    try {
      const newImageUrls = [];

      // Upload new images to Firebase Storage
      for (const image of newImages) {
        const imageRef = ref(storage, `posts/${id}/${uuidv4()}-${image.name}`);
        await uploadBytes(imageRef, image);  // Upload the image
        const imageUrl = await getDownloadURL(imageRef);  // Get the download URL
        newImageUrls.push(imageUrl);  // Add URL to the array
      }

      // Update the Firestore document with new and existing image URLs
      const postRef = doc(db, 'posts', id);
      await updateDoc(postRef, {
        title,
        description,
        imageUrls: [...existingImages, ...newImageUrls],  // Combine old and new images
      });

      navigate('/admin');  // Redirect to the dashboard after saving
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <div className='p-3 shadow-xl bg-white flex align-middle justify-between'>
      <a href="/admin" className='p-2 bg-blue-900 text-white rounded-lg shadow-lg'>Cancel</a>
        <h2 className='text-xl text-gray-900'>Edit Your Post</h2>
        
      </div>
    <div className='flex align-middle justify-center'>
      <form className='flex flex-col mt-5 shadow-xl p-3 w-[80%] gap-4' onSubmit={(e) => e.preventDefault()}>
        <input
          style={{border: "solid blue 1px"}}
          className='h-[3rem] rounded-md p-3 shadow-md text-black'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea style={{border: "solid blue 1px"}}
          className='h-[15rem] p-5 text-xl border-b-8 shadow-md rounded-md border-solid border-blue-950'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />

        {/* Display existing images with delete functionality */}
        <h4>Existing Images</h4>
        <div className='flex justify-evenly flex-wrap'>
          {existingImages.map((imageUrl, index) => (
            <div key={index} className=' w-[250px] shadow-2xl p-3 rounded-xl'>
              <img src={imageUrl} alt="Post" />
              <button className='p-2 bg-red-500 text-white rounded-lg m-3' onClick={() => handleDeleteImage(imageUrl)}><IoTrashBinSharp /></button>
            </div>
          ))}
        </div>

        {/* File input for new images */}
        <h4>Upload New Images</h4>
        <input
          className='h-[3rem] rounded-md p-3 shadow-md'
          type="file"
          multiple
          onChange={handleImageChange}
        />
        <p className='text-red-500 text-center text-wrap text-lg font-bold'>Note: After Clicking Save Wait To Be Redirected To The Admin Board...</p>
        <button className='bg-blue-600 p-2 text-xl rounded-md shadow-md w-[10rem] text-center text-white' onClick={handleSave}>Save Changes</button>
      </form>
    </div>
    </div>
  );
};

export default EditPost;
