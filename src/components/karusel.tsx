"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useLanguage } from '@/i18n'



interface Props {
  className?: string
  imageList?: any[]
  title?: string
}
export function Karusel({
  className = 'w-full max-w-2xl',
  imageList = [],
  title = ""
}: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  )
  const { t } = useLanguage()

  return (
    <div className={`relative ${className}`}>
      <div className='absolute bottom-8 w-full z-10 text-center'>
        <span className='bg-black bg-opacity-35 rounded text-white p-1'>{t(title || '')}</span>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className={`w-full`}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true
        }}
      >
        <CarouselContent >
          {imageList.map((e, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img src={e} alt={index.toString()} className='aspect-square w-full' />
                {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
              </div>
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious className='ms-[46px]' />
        <CarouselNext className='me-[46px]' />
      </Carousel>
    </div>
  )
}
