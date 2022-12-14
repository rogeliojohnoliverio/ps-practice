import React from 'react'
import { NextPage } from 'next'

const IGPhone: NextPage = (): JSX.Element => {
  return (
    <div className="hidden md:block ">
      <div className="h-[585px] w-[380px] bg-[url('/images/ig_phone.png')] bg-[center_top]"></div>
      <img
        src="/images/ig_timeline.png"
        className=" absolute top-0 ml-0.5 mt-0.5 translate-x-28 translate-y-14 animate-fade-in"
        alt="IG Timeline"
      />
      <img
        src="/images/ig_profile.png"
        className=" absolute top-0 ml-0.5 mt-0.5 translate-x-28 translate-y-14 animate-fade-out"
        alt="IG Profile"
      />
    </div>
  )
}

export default IGPhone
