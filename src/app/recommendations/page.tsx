'use client'

import { useState } from 'react'
import { RecommendationList } from 'donno-app/components/Recommendations'
import { RoundButton } from 'donno-app/components/ui/roundButton'
import { Drawer } from 'donno-app/components/ui/drawer'
import { DrawerTrigger } from 'donno-app/components/ui/drawer'
import { DrawerContent } from 'donno-app/components/ui/drawer'
import { DrawerFooter } from 'donno-app/components/ui/drawer'
import { Button } from 'donno-app/components/ui/button'
import { useIsMobile } from 'donno-app/hooks/use-mobile'
import { Dialog } from 'donno-app/components/ui/dialog'
import { DialogTrigger } from 'donno-app/components/ui/dialog'
import { DialogContent } from 'donno-app/components/ui/dialog'
import { DialogHeader } from 'donno-app/components/ui/dialog'
import { Heart } from 'lucide-react'
import { toast } from 'sonner'

import { Separator } from 'donno-app/components/ui/separator'
import { AutosuggestField } from 'donno-app/components/AutosuggestField'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from 'donno-app/components/ui/accordion'
import { DialogFooter } from 'donno-app/components/ui/dialog'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'donno-app/components/ui/breadcrumb'

const FAVOURITE_ICON = Heart

type SortOption = 'Match percentage' | 'Highest rating' | 'Name' | 'Year'
type FilterOption = 'Platform' | 'Language' | 'Country' | 'None'

const Page = () => {
  const isMobile = useIsMobile()
  const [selectedSort, setSelectedSort] =
    useState<SortOption>('Match percentage')
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>('None')
  // Store selected countries for filtering recommendations
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  // Store selected languages for filtering recommendations
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

  const handleCountrySelectionChange = (countries: string[]) => {
    setSelectedCountries(countries)
  }

  const handleLanguageSelectionChange = (languages: string[]) => {
    setSelectedLanguages(languages)
  }

  const COMMON_LANGUAGES = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Russian',
    'Chinese',
    'Japanese',
    'Korean',
    'Hindi',
    'Arabic',
    'Turkish',
    'Polish',
    'Dutch',
    'Swedish',
    'Norwegian',
    'Danish',
    'Finnish',
    'Greek',
    'Czech',
    'Hungarian',
    'Romanian',
    'Thai',
    'Vietnamese',
  ]
  return (
    <div className='px-2 pb-20 '>
      <div className='sticky top-3.5 left-3.5 right-3.5 z-50 flex justify-between'>
        <RoundButton
          variant='primary'
          href='/recommendations'
          icon='chevron-left'
        />
        {isMobile ? (
          <Drawer direction='top'>
            <DrawerTrigger asChild>
              <button
                type='button'
                className='rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring'
              >
                <RoundButton variant='secondary' icon='hamburger' />
              </button>
            </DrawerTrigger>
            <DrawerContent className='gap-0 border-[0.3px] border-white-12 mx-2.5'>
              <div className='flex justify-center pb-3 '>
                <p> Your recommended films </p>
              </div>
              <Separator />
              <DrawerFooter className='p-0'>
                <Button
                  variant='ghost'
                  className='justify-start hover:text-bold hover:bg-white-4 '
                  onClick={() =>
                    toast.success(
                      'Currently this options is unavailable (:Liza is still working on it:)'
                    )
                  }
                >
                  <FAVOURITE_ICON className='size-4' />
                  Share
                </Button>
                <Accordion type='single' collapsible className='p-0'>
                  <AccordionItem value='item-1' className='p-0'>
                    <AccordionTrigger className='p-x pt-2.5 pb-2 hover:bg-white-4 rounded-full w-full items-baseline px-3'>
                      <div className='flex gap-1.5 items-center flex-1'>
                        <FAVOURITE_ICON className='size-4' />
                        <span>Sort by</span>
                        <span className='text-white/70 ml-auto mr-2'>
                          {selectedSort}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-0'>
                      <Button
                        variant='ghost'
                        className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                        onClick={() => setSelectedSort('Match percentage')}
                      >
                        Match percentage
                      </Button>

                      <Button
                        variant='ghost'
                        className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                        onClick={() => setSelectedSort('Highest rating')}
                      >
                        Highest rating
                      </Button>

                      <Button
                        variant='ghost'
                        className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                        onClick={() => setSelectedSort('Name')}
                      >
                        Name
                      </Button>
                      <Button
                        variant='ghost'
                        className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                        onClick={() => setSelectedSort('Year')}
                      >
                        Year
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type='single' collapsible className='p-0'>
                  <AccordionItem value='item-2' className='p-0'>
                    <AccordionTrigger className='p-x pt-2.5 pb-2 hover:bg-white-4 rounded-full w-full items-baseline px-3'>
                      <div className='flex gap-1.5 items-center flex-1'>
                        <FAVOURITE_ICON className='size-4' />
                        <span>Filter</span>
                        <span className='text-white/70 ml-auto mr-2'>
                          {selectedFilter}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-0'>
                      <Button
                        variant='ghost'
                        className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                        onClick={() => setSelectedFilter('Platform')}
                      >
                        Platform
                      </Button>

                      <AutosuggestField
                        label='Language'
                        options={COMMON_LANGUAGES}
                        placeholder='Type to search languages...'
                        onSelectionChange={handleLanguageSelectionChange}
                      />

                      <AutosuggestField
                        label='Country'
                        onSelectionChange={handleCountrySelectionChange}
                      />

                      <Button
                        variant='ghost'
                        className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                        onClick={() => setSelectedFilter('None')}
                      >
                        None
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Button
                  variant='ghost'
                  className='justify-start hover:text-bold hover:bg-white-4 '
                  onClick={() =>
                    toast.success(
                      'Already watched films will not be recommended to you anymore'
                    )
                  }
                >
                  <FAVOURITE_ICON className='size-4' />
                  Don’t recommend already watched films
                </Button>
                <Button
                  variant='ghost'
                  className='justify-start hover:text-bold hover:bg-white-4 '
                  onClick={() =>
                    toast.success('Film is added to your Liked films')
                  }
                >
                  <FAVOURITE_ICON className='size-4' />
                  Movies and episodes
                </Button>
                <Button
                  variant='ghost'
                  className='justify-start hover:text-bold hover:bg-white-4 '
                  onClick={() =>
                    toast.success(
                      'Liza is still working on Roulette. Please be patient before having too much fun'
                    )
                  }
                >
                  <FAVOURITE_ICON className='size-4' />
                  Add to roulette
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <button
                type='button'
                className='rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring'
              >
                <RoundButton variant='secondary' icon='hamburger' />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <div className='flex justify-center'>
                  <p> Your recommended films </p>
                </div>
              </DialogHeader>
              <Separator />

              <DialogFooter>
                <div className='flex flex-col w-full'>
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Add to favourite
                  </Button>
                  <Accordion type='single' collapsible className='p-0'>
                    <AccordionItem value='item-1' className='p-0'>
                      <AccordionTrigger className='p-x pt-2.5 pb-2 hover:bg-white-4 rounded-full w-full items-baseline px-3'>
                        <div className='flex gap-1.5'>
                          <FAVOURITE_ICON className='size-4' />
                          Add to watchlist
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className='p-0'>
                        <Button
                          variant='ghost'
                          className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                          onClick={() =>
                            toast.success('Film is added to your Liked films')
                          }
                        >
                          New folder
                        </Button>

                        <Button
                          variant='ghost'
                          className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                          onClick={() =>
                            toast.success('Film is added to your Liked films')
                          }
                        >
                          Top Films
                        </Button>
                        <Button
                          variant='ghost'
                          className='justify-start w-full pl-8.5 text-white/70 hover:bg-white/0 hover:text-white/90'
                          onClick={() =>
                            toast.success('Film is added to your Liked films')
                          }
                        >
                          My top B&W films
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Share
                  </Button>
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Add to roulette
                  </Button>
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Do not recommend this film to me again
                  </Button>
                  <Button
                    variant='ghost'
                    className='justify-start hover:text-bold hover:bg-white-4 '
                    onClick={() =>
                      toast.success('Film is added to your Liked films')
                    }
                  >
                    <FAVOURITE_ICON className='size-4' />
                    Already watched
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className='pb-3 flex justify-between'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Genre</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/map'>Place</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href='/time-range'>Time</BreadcrumbLink>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>Recommendations</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <RecommendationList />
      </div>
    </div>
  )
}

export default Page
