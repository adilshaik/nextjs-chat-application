import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Context } from '../context';
import axios from 'axios';
import Image from 'next/image';

const Index = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  const router = useRouter();

  const handleSubmit = (e) => {
    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        'https://api.chatengine.io/users/',
        {
          username,
          secret,
        },
        {
          headers: {
            'Private-key': 'eb706658-cf8e-467e-a321-89d59e62af50',
          },
        }
      )
      .then((r) => router.push('/chats'));
    e.preventDefault();
  };

  return (
    <div className='min-h-screen flex'>
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <div className='flex flex-col items-center'>
              <Image width={60} height={60} src='/favicon.ico' alt='favicon' />
              <h1 className='my-5 text-2xl font-bold text-gray-600'>
                Simple Chat App
              </h1>
            </div>
            <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
          </div>

          <div className='mt-8'>
            <div className='mt-6'>
              <form onSubmit={(e) => handleSubmit(e)} className='space-y-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email address
                  </label>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      onChange={(e) => setUsername(e.target.value)}
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='space-y-1'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Password
                  </label>
                  <div className='mt-1'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      onChange={(e) => setSecret(e.target.value)}
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block relative w-0 flex-1'>
        <img
          className='absolute inset-0 h-full w-full object-cover'
          src='https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
          alt=''
        />
      </div>
    </div>
  );
};

export default Index;
