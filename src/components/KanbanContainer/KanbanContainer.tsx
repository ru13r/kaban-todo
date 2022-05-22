import Bucket from '@/components/Bucket';
import maxId from '@/utils/maxId';

import { KanbanContainerProps } from './types';

const KanbanContainer = ({ buckets }: KanbanContainerProps) => {
  const newId = maxId(buckets) + 1;
  return (
    <main className={'pt-1'}>
      <div className={'container mx-auto text-center'}>
        <h2 className={'font-bold text-lg'}>My Kanban</h2>
      </div>
      <div className="container mx-auto text-alice-blue">
        <ul className={'flex row'}>
          {buckets.map((bucket) => (
            <Bucket key={bucket.id} {...bucket} />
          ))}
          <Bucket id={newId} name={'New bucket...'} tasks={[]} virtual />
        </ul>
      </div>
    </main>
  );
};

export default KanbanContainer;
