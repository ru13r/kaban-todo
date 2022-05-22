interface ObjectWithId {
  id: number;
}

const maxId = (arr: Array<ObjectWithId>) => Math.max(...arr.map((b) => b.id));
export default maxId;
