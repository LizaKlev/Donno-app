import { Input } from 'donno-app/components/ui/input'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'donno-app/components/ui/breadcrumb'
import {
  RecommendationList,
  sampleRecommendation,
} from 'donno-app/components/Recommendations'

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
      <div>
        <RecommendationList cast={sampleRecommendation} />
      </div>
    </div>
  )
}

export default page
