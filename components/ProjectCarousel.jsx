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
        <Link href='/projects'>
          <CarouselContent>
            {PROJECTS.map((project, index) => {
              return (
                <CarouselItem key={index}>
                  <ProjectCardContent
                    key={project.title}
                    project={project}
                    carousel={carousel}
                    isHovered={isHovered}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Link>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
}

export default ProjectCarousel;
