import React, { FC } from 'react';
import { ROUTES_MAP } from '~/assets/data/routes';
import PageLink from '~/components/molecules/pagelink';

const Layout: FC<any> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-between">
      <main>{children}</main>

      {/* Sidebar */}
      <div className="sidebar h-full hidden ml-auto w-[25%] md:flex flex-col justify-center p-6">
        {ROUTES_MAP.map(({ title, href }, index: number) => (
          <PageLink {...{ title, href, index }} />
        ))}
      </div>
    </div>
  );
};

export default Layout;
