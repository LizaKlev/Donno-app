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
import Link from 'next/link'

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
                    <BreadcrumbPage>Place</BreadcrumbPage>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator />

                  <BreadcrumbItem>
                    <BreadcrumbLink href='/time-range'>Time</BreadcrumbLink>
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

      <div className='sticky bottom-20 md:bottom-4 left-0 z-20 px-2 flex w-full justify-center gap-4 mb-1'>
        <Button variant={'secondary'} className='w-1/3' asChild>
          <Link href='/recommendations'>Skip</Link>
        </Button>
        <Button className='w-1/3'>
          <Link href='/recommendations'>Confirm</Link>
        </Button>
      </div>
    </div>
  )
}

export default page
