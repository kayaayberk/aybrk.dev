import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 48,
  height: 48,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
        }}
      >
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 12.5A12.5 12.5 0 0 1 12.5 0h23a12.5 12.5 0 0 1 12.5 12.5v23a12.5 12.5 0 0 1 -12.5 12.5H12.5A12.498 12.498 0 0 1 0 35.501V12.5Z'
            fill='#0D0D0D'
          />
          <path
            d='M24 8.5 11.5 39h6L24 23.5 30.499 39h6L24 8.5Z'
            fill='#D9D9D9'
          />
        </svg>
      </div>
    ),
    size,
  );
}
