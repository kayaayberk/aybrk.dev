'use client';

import Link from 'next/link';
import ImageAyberk from '../public/headerImages/ImageAyberk.png';
import Image from 'next/image';

function Avatar() {
  return (
    <Link href="/">
      <div className="w-[50px] rounded-full overflow-hidden border-2">
        <Image
          src={ImageAyberk}
          alt="Ayberk"
          className="scale-200 translate-y-4 -translate-x-1"
        />
      </div>
    </Link>
  );
}

export default Avatar;
