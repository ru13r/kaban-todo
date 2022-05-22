import Task from '@/components/Task';
import maxId from '@/utils/maxId';

import { BucketProps } from './types';

const Bucket = ({ id, name, tasks, virtual = false }: BucketProps) => {
  const defaultStyle = 'mx-auto font-bold p-2 text-center text-pale-cerulean';
  const extraStyle = virtual
    ? 'border border-dashed hover:text-only-natural hover:border-solid hover:border-only-natural'
    : 'bg-charcoal-dark';
  const newId = maxId(tasks) + 1;
  return (
    <li key={id} className={'p-4 bg-charcoal basis-1/5'}>
      <h3 className={[defaultStyle, extraStyle].join(' ')}>{name}</h3>
      <ul className={''}>
        {!virtual && <Task id={newId} name={'New Task...'} virtual />}
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </ul>
    </li>
  );
};

export default Bucket;
