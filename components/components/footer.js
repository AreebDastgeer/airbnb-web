import React from 'react';

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-5 md:px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-s text-gray-800'>
        <h5 className='text-base'><b>COMMUNITY</b></h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It is a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Papafam</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='text-base'><b>HOST</b></h5>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>Hundreds of Students</p>
        <p>Join New</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='text-base'><b>SUPPORT</b></h5>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
}

export { Footer };
