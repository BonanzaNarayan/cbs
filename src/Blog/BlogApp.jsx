import { useEffect, useState } from 'react';
import { db } from '../configs/firebase';
import { Link } from 'react-router-dom';

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

import './Blog.css'

const BlogApp = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('createdAt', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    // <div>
    //   <h2>Blog Posts</h2>
    //   {posts.map(post => (
    //     <div key={post.id}>
    //       <img src={post.data.imageUrls[0]} alt={post.data.title} />
    //       <h3>{post.data.title}</h3>
    //       <p>{post.data.description}</p>
    //       <Link to={`/post/${post.id}`}>View More</Link>
    //     </div>
    //   ))}
    // </div>
    <div>
      <Header />
      <section className=" blogSec relative h-[70vh]">
        <h2 className='text-white text-3xl'>Welcome The Corporate Voice</h2> 
        <h3 className='text-2xl'>Join us as we shape tomorrow, today. Solution Space Technologies is your go-to partner.</h3>
        <h1 className='text-5xl text-blue-600 font-bold'>CBS</h1>

      </section>
      <div className='flex justify-evenly flex-wrap align-middle gap-5 mt-10'>
        {
          posts.map(post =>(
            <article key={post.id} 
            className="overflow-hidden rounded-lg border 
            border-gray-100 bg-white shadow-sm w-[350px]"
            >
            <img
              alt={post.data.title}
              src={post.data.imageUrls[0]}
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <span>
                <h3 className="text-lg font-medium text-gray-900">
                {post.data.title}
                </h3>
              </span>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              {post.data.description}
              </p>
              <Link className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600" to={`/post/${post.id}`}>Find out more
              <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
          ))
        }
      </div>
      <Footer />
    </div>
  );
};

export default BlogApp;
