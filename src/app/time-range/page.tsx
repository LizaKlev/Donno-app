import { Slider } from 'donno-app/components/ui/slider'
import { Input } from 'donno-app/components/ui/input'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'donno-app/components/ui/breadcrumb'
import { Button } from 'donno-app/components/ui/button'

const page = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Genre</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Time</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/film-overview'>Film overview</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Input placeholder='Search...' />
      <Slider
        // defaultValue={[20, 80]} min={0} max={100}
        defaultValue={[33]}
        max={100}
        step={1}
      />
      <div className='flex w-full justify-center gap-4'>
        <Button variant={'secondary'} className='w-1/3'>
          Apply
        </Button>
        <Button className='w-1/3'>Reset</Button>
      </div>
    </div>
  )
}

export default page
