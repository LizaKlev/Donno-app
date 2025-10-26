import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { InputGroupButton } from '../components/ui/input-group'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb'

export default function Home() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/components'>Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p>mememe</p>
      <Input placeholder='Search...' />
      <Button variant='primary'>Primary Button</Button>
      <Button variant='secondary'>Secondary Button</Button>
      <Input placeholder='Search...' />
      <InputGroupButton variant='primary'>Go</InputGroupButton>
    </div>
  )
}
