import { Slider } from 'donno-app/components/ui/slider'

const page = () => {
  return (
    <div>
      <Slider
        // defaultValue={[20, 80]} min={0} max={100}
        defaultValue={[33]}
        max={100}
        step={1}
      />
    </div>
  )
}

export default page
