export type Highlights = {
  id: number
  cover_photo: string
  title: string
}

export type Profile = {
  id: number
  name: string
  username: string
  post_count: number
  follower_count: number
  following_count: number
  bio: string
  avatar: string
  highlights: Highlights[]
}
