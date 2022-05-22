import KanbanContainer from '@/components/KanbanContainer';
import Meta from '@/components/Meta';
import PageContainer from '@/components/PageContainer';
import useOrientation from '@/hooks/useOrientation';
import useBuckets from '@/store/buckets';

const Welcome = () => {
  const isPortrait = useOrientation();
  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';

  const [buckets] = useBuckets();

  return (
    <PageContainer>
      <Meta title="Welcome to Kanban-Todo" />
      <div className={'flex ' + isPortrait ? 'column' : 'row'}>
        <KanbanContainer buckets={buckets} />
      </div>
    </PageContainer>
  );
};

export default Welcome;
