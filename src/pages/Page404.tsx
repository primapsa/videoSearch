import React from 'react';
import { Page } from '@/components/page';
import NotFound from '@/components/notFound/notFound';

const Page404 = () => (
  <Page withoutNavigate>
    <NotFound />
  </Page>
);

export default Page404;
