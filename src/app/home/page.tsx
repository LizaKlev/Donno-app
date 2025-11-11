import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'donno-app/components/ui/avatar'
import { Input } from 'donno-app/components/ui/input'
import { RoundButton } from 'donno-app/components/ui/roundButton'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Hi Baby</p>
      </div>
      <Input />
      <p>Home</p>

      <div className='grid grid-cols-2 md:grid-cols-5 grid-rows-3 gap-1'>
        <div className='pt-2.5 pb-4 px-2.5 rounded-3xl h-48 bg-crime-red col-span-2 md:col-span-4 flex flex-col justify-between gap-3'>
          <RoundButton
            variant='tertiary'
            icon='heart'
            className='w-fit'
          ></RoundButton>
          <div>
            <p>Liked films</p>
            <p>183 films • 20 episodes</p>
          </div>
        </div>

        <div className='pt-2.5 pb-4 px-2.5 rounded-3xl h-48 bg-white-4 flex flex-col justify-between gap-3'>
          <RoundButton
            variant='tertiary'
            icon='heart'
            className='w-fit'
          ></RoundButton>
          <div>
            <p>Liked films</p>
            <p>183 films • 20 episodes</p>
          </div>
        </div>

        <div className='pt-2.5 pb-4 px-2.5 rounded-3xl h-48 bg-musical-purple flex flex-col justify-between gap-3'>
          <RoundButton
            variant='tertiary'
            icon='heart'
            className='w-fit'
          ></RoundButton>
          <div>
            <p>Liked films</p>
            <p>183 films • 20 episodes</p>
          </div>
        </div>

        <div className='pt-2.5 pb-4 px-2.5 col-span-2 rounded-3xl h-48 bg-white-4 flex flex-col justify-between gap-3'>
          <RoundButton
            variant='tertiary'
            icon='heart'
            className='w-fit'
          ></RoundButton>
          <div>
            <p>Liked films</p>
            <p>183 films • 20 episodes</p>
          </div>
        </div>

        <div className='pt-2.5 pb-4 px-2.5 rounded-3xl h-48 bg-white-4 flex flex-col justify-between gap-3'>
          <RoundButton
            variant='tertiary'
            icon='heart'
            className='w-fit'
          ></RoundButton>
          <div>
            <p>Liked films</p>
            <p>183 films • 20 episodes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
