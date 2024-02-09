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
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 25C0 11.1929 11.1929 0 25 0H71C84.8071 0 96 11.1929 96 25V71C96 84.8071 84.8071 96 71 96H25C11.1929 96 0 84.8071 0 71V25Z'
            fill='#0D0D0D'
          />
          <path d='M48 17L23 78H35L48 47L61 78H73L48 17Z' fill='#D9D9D9' />
        </svg>
      </div>
    ),
    size,
  );
}
