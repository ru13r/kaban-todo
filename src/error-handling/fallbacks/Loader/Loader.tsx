import { messages } from '@/config';

function LoaderErrorBoundaryFallback() {
  return (
    <div>
      <h5>{messages.loader.fail}</h5>
    </div>
  );
}

export default LoaderErrorBoundaryFallback;
