import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { FacebookIcon } from '~/shared/icons/FacebookIcon'

const FacebookLoginBtn: NextPage = (): JSX.Element => {
  return (
    <Link href={`/`} className="mx-auto mt-4 flex items-center gap-2">
      <FacebookIcon className="h-6 w-6" />{' '}
      <span className="text-sm font-medium text-[#125a9b]">Log in with Facebook</span>
    </Link>
  )
}

export default FacebookLoginBtn
