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
import { RecommendationCard } from 'donno-app/components/Recommendations'

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
            <BreadcrumbLink href='/time-range'>Time</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Recommendations</BreadcrumbPage>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href='/film-overview'>Film overview</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Input placeholder='Search...' />

      {/* so, here is the recommendations section */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>
        <RecommendationCard />
      </div>

      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>
        {/* {Recommendations.map((recommendation) => (
          <RecommendationCard
            key={recommendation.title}
            id={recommendation.id}
            name={recommendation.name}
            percentage={recommendation.percentage}
            image={recommendation.image}
          />
        ))} */}
      </div>
    </div>
  )
}

export default page
