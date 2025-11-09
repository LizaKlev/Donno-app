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
    <div className='px-2 pb-20'>
      <div className='sticky top-1.5 left-0 z-20 px-2 bg-linear-to-b from-background via-background/90 to-background/10'>
        <div className='mx-auto '>
          <div className='items-center justify-between py-2'>
            <div className='pb-3'>
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
                    <BreadcrumbLink href='/recommendations'>
                      Recommendations
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <Input placeholder='Search...' />
          </div>
        </div>
      </div>
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
