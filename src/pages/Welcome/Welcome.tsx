import Meta from '@/components/Meta';
import useOrientation from '@/hooks/useOrientation';

function Welcome() {
  const isPortrait = useOrientation();
  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <Meta title="Welcome" />
      <div className={'flex ' + isPortrait ? 'column' : 'row'}>
        <p>Hello World</p>
      </div>
    </>
  );
}

export default Welcome;
