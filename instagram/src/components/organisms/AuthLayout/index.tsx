import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import FacebookLoginBtn from '~/components/atoms/FacebookLoginBtn.tsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AuthLayout: NextPage = (): JSX.Element => {
  const router = useRouter()
  return (
    <div className="h-min w-[350px] ">
      <div className="mt-3 px-10 pt-10 pb-5 md:border md:border-slate-300 md:bg-white ">
        <div className="mx-auto mb-8 mt-3 h-[55px] w-[180px] bg-[url('/images/ig_logo.png')] bg-cover"></div>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            id="email"
            className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-gray-400 focus:ring-gray-300"
            placeholder="Phone number, username or email"
            required
          />
          <input
            type="password"
            id="password"
            className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2.5 text-xs text-gray-900 focus:border-gray-400 focus:ring-gray-300"
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={() => router.push('/profile')}
            className="mb-2 mt-1 rounded-md bg-[#0095f6] px-5 py-2 text-xs font-medium text-white  focus:ring-4 focus:ring-blue-300 "
          >
            Log in
          </button>
          <div className="relative flex items-center px-1">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 flex-shrink text-xs font-semibold text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <FacebookLoginBtn />
          <Link href="/" className="mx-auto mt-3 text-xs">
            Forgot password?
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-3 p-5 text-center text-xs md:border md:border-slate-300 md:bg-white">
        <span>Don't have an account?</span>
        <Link href="/" className="ml-1 font-medium text-[#0095f6]">
          Sign up
        </Link>
      </div>
      <div className="mx-auto my-1 p-3 text-center text-sm">
        <span>Get the app.</span>
      </div>
      <div className="flex items-center justify-center gap-2 text-sm">
        <img src="/images/ig_google_play.png" className=" h-10" alt="Get on Google Play" />
        <img src="/images/ig_microsoft.png" className=" h-10" alt="Get on Google Play" />
      </div>
    </div>
  )
}

export default AuthLayout
