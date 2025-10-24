import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { InputGroupButton } from '../components/ui/input-group'

export default function Home() {
  return (
    <div>
      <p>mememe</p>
      <Input placeholder='Search...' />
      <Button variant='primary'>Primary Button</Button>
      <Button variant='secondary'>Secondary Button</Button>
      <Input placeholder='Search...' />
      <InputGroupButton variant='primary'>Go</InputGroupButton>
    </div>
  )
}
