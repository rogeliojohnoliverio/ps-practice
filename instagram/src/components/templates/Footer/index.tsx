import React from 'react'
import { NextPage } from 'next'
import { ChevronDown } from 'react-feather'
import { styles } from '~/shared/twin/login.styles'

const Footer: NextPage = (): JSX.Element => {
  return (
    <footer css={styles.footer}>
      <div className="flex flex-wrap justify-center gap-3 px-10 ">
        <a href="/">Meta</a>
        <a href="/">About</a>
        <a href="/">Blog</a>
        <a href="/">Jobs</a>
        <a href="/">Help</a>
        <a href="/">API</a>
        <a href="/">Privacy</a>
        <a href="/">Terms</a>
        <a href="/">Top Accounts</a>
        <a href="/">Hashtags</a>
        <a href="/">Locations</a>
        <a href="/">Instagram Lite</a>
        <a href="/">Contact Uploading & Non-Users</a>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center">
          <span>English</span>
          <ChevronDown className="h-3 w-3" />
        </div>
        <div>© 2022 Instagram from Meta</div>
      </div>
    </footer>
  )
}

export default Footer
