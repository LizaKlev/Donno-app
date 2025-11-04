import { Review } from './review'

export const sampleReviews: Review[] = [
  {
    id: 1,
    user: { name: 'Muhammad', reviewCount: 32, avatar: '' },
    rating: 3,
    date: '19th of March',
    text: 'Perhaps pseudo intellectuals find these silly films entertaining. Some of them are, actually. (e.g., The Royal Tenenbaums, The Life Aquatic. Even Rushmore held my attention and earned my respect.)',
    likes: 1726,
    dislikes: 7642,
    sentiment: 'neutral',
  },
  {
    id: 2,
    user: { name: 'Elena', reviewCount: 12, avatar: '' },
    rating: 2,
    date: '19th of March',
    text: 'There are many clever and witty lines delivered throughout.  Yet, the viewer is forced to enjoy them through a roller coaster of a murder mystery (for whose genre I wish I would die) and a zany “Naked Gun”-style scramble and chase.  On balance, the movie doesn’t deliver you anywhere you want to go, unless you are simply into silly stories.',
    likes: 120,
    dislikes: 300,
    sentiment: 'negative',
  },
  {
    id: 3,
    user: { name: 'Travis', reviewCount: 32, avatar: '' },
    rating: 5,
    date: '19th of March',
    text: 'Amazing film! 21 March 2014 Film of Choice at The Plaza Tonight - The Grand Budapest Hotel. I really had no idea what this film was about, having seen only one trailer which in the event, bore no relation to the plot whatsoever. However, my interest was piqued so this evening found me watching a splendid little film packed to the rafters with stars. This was the tale of Gustave H, the legendary and infamous Concierge of The Grand Budapest Hotel, a rather glamorous edifice perched atop a mountain and his protégé and most trusted friend Zero, The Lobby Boy. This is a tale of friendship, murder, revenge and deep dark plotting. There were some completely ridiculous moments which were quite refreshing and several, what I like to call Guffaw moments where several members of the audience emit a loud blast of laughter followed by slightly hysterical giggling that you find yourself joining in with. As I said a host of stars in this film ranging from Ralph Fiennes, Jeff Goldblum, Jude Law and Bill Murray to Tilda Swinton, Owen Wilson and Harvey Keitel to name a few, but one of the outstanding performances must go to Tony Revolori, a relatively unknown young actor who plays Zero, who is In almost every scene. An entertaining film, worth watching.',
    likes: 247,
    dislikes: 15,
    sentiment: 'positive',
  },
]
