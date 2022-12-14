import Head from 'next/head'
import Footer from '~/components/templates/Footer'
import Sidebar from '~/components/templates/Sidebar'
import { profile } from '~/shared/json/profileData'
import { styles } from '~/shared/twin/login.styles'
import {
  HiChevronRight,
  HiChevronLeft,
  HiOutlineViewGrid,
  HiOutlinePlay,
  HiOutlineSave,
  HiOutlineUsers
} from 'react-icons/hi'
import { useRef, useState } from 'react'

export default function Profile() {
  const nextNode = useRef<HTMLDivElement | null>(null)
  const [endCount, setEndCount] = useState(7)
  const [startCount, setStartCount] = useState(0)
  const highlights = profile.highlights.map((items, i) => (
    <div
      key={items.id}
      id={`highlight-${i}`}
      className="flex flex-shrink-0 snap-center flex-col items-center space-y-2"
    >
      <img
        src={items.cover_photo}
        className=" h-16 w-16 rounded-full border border-gray-300 p-1 md:h-20 md:w-20 lg:h-24 lg:w-24"
        alt=""
      />
      <span className="text-light  text-sm font-medium">{items.title}</span>
    </div>
  ))
  const handleNextHighlight = () => {
    let node = document.getElementById(`highlight-${endCount}`)
    if (profile.highlights.length > endCount) {
      console.log(node)
      node?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end'
      })
      setEndCount(endCount + 1)
      setStartCount(startCount + 1)
    }
  }
  const handlePreviousHighlight = () => {
    let node = document.getElementById(`highlight-${startCount - 1}`)
    if (startCount > 0) {
      node?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      })
      setStartCount(startCount - 1)
      setEndCount(endCount - 1)
    }
  }
  return (
    <div className="flex h-screen min-h-screen">
      <Sidebar />
      <div className="mx-auto flex h-full w-full  flex-col justify-between overflow-y-auto overflow-x-hidden">
        <main
          css={styles.main}
          className="mx-auto mt-5 flex w-full max-w-4xl items-center  justify-center "
        >
          <div className="w-full flex-1 flex-col space-y-10 md:w-auto">
            <div className="flex items-center space-x-6 md:space-x-24 md:px-10">
              <div className="flex-shrink-0 ">
                <img
                  src={profile.avatar}
                  className="h-20 w-20 rounded-full md:h-40 md:w-40"
                  alt=""
                />
              </div>
              <div className="flex w-full flex-col space-y-7">
                <div className="flex flex-col space-y-3 text-3xl font-light md:flex-row md:items-center md:space-y-0 md:space-x-5">
                  <span>{profile.username}</span>
                  <button
                    type="button"
                    className="w-56 rounded-sm border border-gray-300 bg-[#fafafa] px-3 py-1 text-xs font-medium text-gray-700 shadow-sm focus:ring-4  focus:ring-blue-300 md:w-auto "
                  >
                    Edit Profile
                  </button>
                </div>
                <div className="hidden items-center space-x-8 text-sm md:flex">
                  <div>
                    <span className="text-light mr-2">{profile.post_count}</span>
                    <span className="text-bold">Posts</span>
                  </div>

                  <div>
                    <span className="text-light mr-2">{profile.follower_count}</span>
                    <span className="text-bold">Followers</span>
                  </div>

                  <div>
                    <span className="text-light mr-2">{profile.following_count}</span>
                    <span className="text-bold">Followings</span>
                  </div>
                </div>
                <div className="hidden items-center space-x-5 text-base font-medium md:flex">
                  <span>{profile.bio}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-5 text-base font-medium md:hidden">
              <span>{profile.bio}</span>
            </div>
            <div className="relative flex w-full flex-shrink-0 items-center">
              <div className="flex snap-x space-x-3 overflow-x-hidden px-3 md:space-x-5 md:px-4 lg:space-x-8">
                {highlights}
              </div>
              <div
                onClick={handlePreviousHighlight}
                className="absolute left-0 cursor-pointer rounded-full bg-gray-300"
              >
                <HiChevronLeft className="h-6 w-6" />
              </div>
              <div
                onClick={handleNextHighlight}
                className="absolute right-0 cursor-pointer rounded-full bg-gray-300"
              >
                <HiChevronRight className="h-6 w-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="w-full border-b border-gray-300"></div>
                <div className="mx-auto flex space-x-20 text-xs uppercase">
                  <div className="-mt-[1px] flex items-center space-x-2 py-4 md:border-t md:border-gray-700  ">
                    <HiOutlineViewGrid className="h-4 w-4 text-gray-700" />
                    <span className="hidden md:block">posts</span>
                  </div>
                  <div className="flex items-center space-x-2 py-4">
                    <HiOutlinePlay className="h-4 w-4 text-gray-700" />
                    <span className="hidden md:block">reels</span>
                  </div>
                  <div className="flex items-center space-x-2 py-4">
                    <HiOutlineSave className="h-4 w-4 text-gray-700" />
                    <span className="hidden md:block">saved</span>
                  </div>
                  <div className="flex items-center space-x-2 py-4">
                    <HiOutlineUsers className="h-4 w-4 text-gray-700" />
                    <span className="hidden md:block">tagged</span>
                  </div>
                </div>
                <div className="flex w-full flex-shrink-0">
                  <div className="mx-auto grid w-full flex-shrink-0 grid-cols-3 justify-center gap-1 md:gap-4">
                    <div className="aspect-h-1 relative aspect-square ">
                      <img
                        src="https://picsum.photos/seed/picsum/200"
                        className="h-full w-full object-cover"
                        alt="IG Post"
                      />
                    </div>
                    <div className="aspect-h-1 relative aspect-square ">
                      <img
                        src="https://picsum.photos/seed/picsum/200"
                        className="h-full w-full object-cover"
                        alt="IG Post"
                      />
                    </div>
                    <div className="aspect-h-1 relative aspect-square ">
                      <img
                        src="https://picsum.photos/seed/picsum/200"
                        className="h-full w-full object-cover"
                        alt="IG Post"
                      />
                    </div>
                    <div className="aspect-h-1 relative aspect-square ">
                      <img
                        src="https://picsum.photos/seed/picsum/200"
                        className="h-full w-full object-cover"
                        alt="IG Post"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
