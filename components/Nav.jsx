"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }

    setProviders();
  }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image 
          src="/assets/images/logo.svg"
          alt="PromptGenius Logo"
          width={30} 
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Prompt Genius</p>
      </Link>

      {/* Desktop Nav */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? 
        (<div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className='black_btn'>
            Create Post
          </Link>
          <button type="button" onClick={signOut} className='outline_btn'>
            Sign Out
          </button>
          <Link href="/profile" className='flex gap-2 flex-center'>
            <Image 
              src="/assets/images/logo.svg"
              alt="User Profile"
              width={37} 
              height={37}
              className='rounded-full'
            />
          </Link>
        </div>) 
        : 
        (<>
          {providers && Object.values(providers).map((provider) => (
            <button 
              type='button'
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className='black_btn'
            >
              Sign in with {provider.name}
            </button>
          ))}
        </>)
        }
      </div>

      {/* Mobile Nav */}
      <div className='sm:hidden flex relative'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image 
              src="/assets/images/logo.svg"
              alt="User Profile"
              width={37} 
              height={37}
              className='rounded-full'
            />
          </div>

        ) : 
        (
          <>
            {providers && Object.values(providers).map((provider) => (
            <button 
              type='button'
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className='black_btn'
            >
              Sign in with {provider.name}
            </button>
            ))}
          </>
        )}
      </div>


    </nav>
  )
}

export default Nav