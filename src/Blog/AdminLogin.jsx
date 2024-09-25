import { useState } from 'react';
import { auth } from '../configs/firebase';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer'

import logo from '../assets/icons/logo.png'

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        // Redirect to admin page
        navigate('/admin');
      })
      .catch(err => setError(err.message));
  };

  return (
    // <div>
    //   <h2>Admin Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //     <button type="submit">Login</button>
    //   </form>
    //   {error && <p>{error}</p>}
    // </div>

    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome Admin (Blog App) 🦑
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Be sure not to share your login details to any untrasted user!!
            </p>
          </div>
        </section>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <img src={logo}
                  className="h-8 sm:h-10"
                  alt='logo'
                />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome To CBS Blog 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
              Be sure not to share your login details to any untrasted user!!
              </p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-6">
            {error && <p className='text-red-500' style={{width: "300px", textWrap: "wrap"}}>{error}</p>}
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                <input
                  required
                  type="email"
                  id="Email"
                  name="email"
                  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                  className="mt-1 p-3 w-[20rem] rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                <input
                  required
                  type="password"
                  id="Password"
                  name="password"
                  value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'
                  className="mt-1 w-[20rem] rounded-md p-3 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500" type='submit'
                >
                  LogIn
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </section>
  );
};

export default AdminLogin;
