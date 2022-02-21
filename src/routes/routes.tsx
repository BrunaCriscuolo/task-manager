import { ReactNode } from 'react';

import { DefaultLayout } from 'pages/_layouts/default/default';

type LayoutProps = {
  component: ReactNode;
};

export const Layout = ({ component }: LayoutProps) => (
  <DefaultLayout>{component}</DefaultLayout>
);
