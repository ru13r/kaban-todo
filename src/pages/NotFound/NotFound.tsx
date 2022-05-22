import { giphy404, messages } from '@/config';

function NotFound() {
  return (
    <div>
      <img src={giphy404} alt="404" />
      <h5>404 Not Found</h5>
      <h4>{messages[404]}</h4>
    </div>
  );
}

export default NotFound;
