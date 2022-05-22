import { Buckets } from '@/store/buckets/types';

const mockBuckets: Buckets = [
  {
    id: 1,
    name: 'Today',
    tasks: [
      { id: 1, name: 'Learn programming with React and Recoil' },
      { id: 2, name: 'Read React Router Documentation' },
      { id: 3, name: 'Call my girlfriend' },
      { id: 4, name: 'Do something else instead' },
    ],
  },
  {
    id: 2,
    name: 'This week',
    tasks: [
      { id: 1, name: 'Complete my Kanban Todo App' },
      { id: 2, name: 'Add buttons to add or delete Kanban buckets' },
    ],
  },
  {
    id: 3,
    name: 'Some Time Later',
    tasks: [
      { id: 1, name: 'Task 1' },
      { id: 2, name: 'Task 2' },
      { id: 3, name: 'Task 2' },
      { id: 4, name: 'Task 2' },
    ],
  },
];

export default mockBuckets;
