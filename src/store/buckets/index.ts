import { atom, useRecoilState } from 'recoil';

import mockBuckets from '@/store/buckets/mock';
import { Actions, Bucket, Buckets } from '@/store/buckets/types';
import maxId from '@/utils/maxId';

const bucketsState = atom<Buckets>({
  key: 'Buckets',
  default: mockBuckets,
});

const useBuckets = (): [Buckets, Actions] => {
  const [buckets, setBuckets] = useRecoilState(bucketsState);

  const addBucket = () => {
    console.log('adding bucket');
    const id = maxId(buckets);
    const newBucket: Bucket = {
      id: id + 1,
      name: 'New Bucket',
      tasks: [],
    };
    setBuckets([...buckets, newBucket]);
  };

  const removeBucket = () => {
    console.log('removing bucket');
  };
  return [buckets, { addBucket, removeBucket }];
};

export default useBuckets;
