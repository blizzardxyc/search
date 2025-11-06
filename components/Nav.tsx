import React from 'react';
import { PixelImage } from './ui/pixel-image';

function Nav() {
  return (
    <div className="min-h-24 w-full flex items-center justify-center bg-white dark:bg-black transition-colors">
      {/* Light mode image */}
      <div className="block dark:hidden">
        <PixelImage src="/fav-black.png" grid="8x8" />
      </div>

      {/* Dark mode image */}
      <div className="hidden dark:block">
        <PixelImage src="/fav-white.png" grid="8x8" />
      </div>
    </div>
  );
}

export default Nav;
