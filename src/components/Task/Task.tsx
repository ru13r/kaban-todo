import { TaskProps } from './types';

const Task = ({ name, virtual = false }: TaskProps) => {
  const defaultStyle = 'my-4 p-2 border';
  const extraStyle = virtual
    ? 'border-dashed text-pale-cerulean hover:text-only-natural hover:border-solid hover:border-only-natural'
    : '';
  return <li className={[defaultStyle, extraStyle].join(' ')}>{name}</li>;
};

export default Task;
