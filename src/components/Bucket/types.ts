import { Bucket } from '@/store/buckets/types';

export type BucketProps = Bucket & {
  virtual?: boolean;
};
