import React from 'react';

import Background from '@/components/layout/Background';
import Socials from '@/components/layout/Socials';
import Main from '@/components/layout/Main';
import Sections from '@/components/layout/Sections';

export default function Home() {
  return (
    <div className="flex">
      <Background />
      <Socials />
      <Main />
      <Sections />
    </div>
  );
}