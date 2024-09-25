import  { useEffect, useState } from 'react';
import { db } from '../configs/firebase';
import { useParams } from 'react-router-dom';
import './postD.css'
import Footer from '../Components/Footer/Footer'

import { FaBackspace } from "react-icons/fa";



const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    db.collection('posts').doc(postId).get().then(doc => {
      setPost(doc.data());
    });
  }, [postId]);

  return (

    post ? (
      <div>
        <div className="head relative bg-white flex p-1 justify-between">
          <a href="/blog" className='bg-blue-500 p-2 text-white rounded-3xl m-5 mt-5'>
          <FaBackspace />
          </a>
          <div className="logo">
            <img style={{width: "70px", height: "70px"}} src="/src/assets/icons/logo.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className=''>
          <div className='imgCon'>
            {post.imageUrls.map((url, index) => (
              
                <img src={url} key={index}  className='rounded-xl' alt={post.title} />
              
            ))}
            </div>
            <h2 className='text-xl bold m-5'>{post.title}</h2>
            <p className='bold m-6 w-full'>{post.description}</p>
          </div>
        </div>
        <Footer />
    </div>
    ) : <p>Loading...</p>
  );
};

export default PostDetails;
