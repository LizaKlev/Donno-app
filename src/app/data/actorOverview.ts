import type { actorOverview } from './review'

export const sampleActorOverview: actorOverview = {
  name: 'Tilda Swinton',
  position: 'Actress',
  image: 'https://via.placeholder.com/150',
  quickLinks: ['Independent Films', 'Fantasy', 'Drama'],
  age: 60,
  birthDate: '1960-02-05',
  deathDate: '2025-02-05',
  birthplace: 'London, England',
  awardsNumber: 10,
  nominationsNumber: 10,
  bio: 'Tilda Swinton is a British actress. She is best known for her role as The White Witch in the Chronicles of Narnia series.',
  awards: [
    {
      name: 'Best Actor',
      year: 2014,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Best Actress',
      year: 2014,
      image: 'https://via.placeholder.com/150',
    },
  ],
  nominations: [
    {
      name: 'Best Actress',
      year: 2014,
      image: 'https://via.placeholder.com/150',
    },
  ],
  movieNumber: 753,
}
