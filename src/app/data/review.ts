export interface Review {
  id: number
  user: {
    name: string
    reviewCount: number
    avatar?: string
  }
  text: string
  rating: number // 1–5 stars
  likes: number
  dislikes: number
  date: string

  sentiment?: 'positive' | 'neutral' | 'negative'
}

export interface filmOverview {
  name: string
  duration: string
  imdb: number
  matchPercentage?: string
  posterImage?: string
  genres?: (
    | 'Adventure'
    | 'Comedy'
    | 'Crime'
    | 'Drama'
    | 'Fantasy'
    | 'Horror'
    | 'Mystery'
    | 'Romance'
    | 'Sci-fi'
    | 'Thriller'
    | 'War'
    | 'Western'
  )[]
  country: string
  language: string
  year: number
  awardsNumber: number
  nominationsNumber: number
  description: string
  storyline: string
  cast: {
    name: string
    character: string
    image: string
  }[]
  crew: {
    name: string
    role: string
    image: string
  }[]
  platforms: {
    name: string
    image: string
    link: string
  }[]
  awards: {
    name: string
    year: number
    image: string
  }[]
  nominations: {
    name: string
    year: number
    image: string
  }[]
}

export interface actorOverview {
  name: string
  position: string
  image: string
  quickLinks: string[]
  age: number
  birthDate: string
  deathDate: string
  birthplace: string
  awardsNumber: number
  nominationsNumber: number
  bio: string
  awards: {
    name: string
    year: number
    image: string
  }[]
  nominations: {
    name: string
    year: number
    image: string
  }[]
  movieNumber: number
}
