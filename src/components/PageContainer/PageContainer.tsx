import { PageContainerProps } from './types';

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <main className={'pt-14'}>
      <div className="container mx-auto text-alice-blue">{children}</div>
    </main>
  );
};

export default PageContainer;
