import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <div>
      <p>mememe</p>
      <Input placeholder='Search...' />
      <Button variant='outline'>Button</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='secondary'>Secondary</Button>
    </div>
  )
}
