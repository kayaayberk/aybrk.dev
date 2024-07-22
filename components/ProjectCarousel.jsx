'use client';

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Card from './Card';
import Link from 'next/link';
import { useState } from 'react';
import { PROJECTS } from '@/lib/constants';
import Autoplay from 'embla-carousel-autoplay';
import ProjectCardContent from './ProjectCardContent';

function ProjectCarousel({ carousel }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered((prev) => !prev);
  };
  const handleMouseLeave = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isHovered={isHovered}
      carousel
    >
      <Carousel>
          <CarouselContent>
            {PROJECTS.map((project, index) => {
              return (
                <CarouselItem key={index}>
                  <Link href='/projects'>
                  <ProjectCardContent
                    key={project.title}
                    project={project}
                    carousel={carousel}
                    isHovered={isHovered}
                  />
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
}

export default ProjectCarousel;
