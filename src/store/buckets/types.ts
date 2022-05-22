export type Actions = {
  addBucket: () => void;
  removeBucket: () => void;
};

export type Buckets = Array<Bucket>;

export type Bucket = {
  id: number;
  name: string;
  tasks: Array<Task>;
};

export type Task = {
  id: number;
  name: string;
};
