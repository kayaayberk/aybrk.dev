import {
  sharedTitle,
  sharedImage,
  sharedDescription,
} from '@/app/shared-metadata';
import { ImageResponse } from 'next/og';
import { getMediumFont } from '@/lib/utils';
import { OgImage } from '@/components/og-image';

export const runtime = 'edge';
export const alt = sharedTitle;
export const size = {
  width: sharedImage.width,
  height: sharedImage.height,
};
export const contentType = sharedImage.type;

export default async function Image() {
  const imageData = await fetch(
    new URL('../../public/meImages/IMG_6045.JPG', import.meta.url),
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <OgImage
        title={sharedTitle}
        description={sharedDescription}
        image={imageData}
        url='journey'
      />
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Space Grotesk',
          data: await getMediumFont(),
          style: 'normal',
          weight: '500',
        },
        {
          name: 'Space Grotesk',
          data: await getMediumFont(),
          style: 'normal',
          weight: '600',
        },
      ],
    },
  );
}
