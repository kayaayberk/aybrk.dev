// import { SCROLL_AREA_ID } from '@/lib/constants';

export const Scroll = ({ hasScrollTitle = false, className, ...rest }) => (
  <div
    // id={hasScrollTitle ? SCROLL_AREA_ID : undefined}
    className="relative h-full w-full max-h-dynamic-screen min-h-dynamic-screen overflow-y-auto overflow-x-hidden"
    {...rest}
  />
);
