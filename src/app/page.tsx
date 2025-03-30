import React from 'react';

import Background from '@/components/layout/Background';
import Sidebar from '@/components/layout/Sidebar';
import Main from '@/components/layout/Main';
import Sections from '@/components/layout/Sections';

export default function Home() {
  return (
    <div className="flex">
      <Background />
      <Sidebar />
      <Main />
      <Sections />
    </div>
  );
}