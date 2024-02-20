import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getMediumFont = async () => {
  const response = await fetch(
    new URL('@/assets/fonts/LabilGrotesk-Medium.ttf', import.meta.url),
  );
  const font = await response.arrayBuffer();
  return font;
};

export const isDevelopment = process.env.NODE_ENV === 'development';

export const getDateTimeFormat = (date) => {
  const dateObj = new Date(date);
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(dateObj);
};
