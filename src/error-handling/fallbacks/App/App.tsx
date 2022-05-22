import { email, messages } from '@/config';

//import resetApp from '@/utils/reset-app';

function AppErrorBoundaryFallback() {
  return (
    <div>
      <p>{messages.app.crash.title}</p>
      <p>{messages.app.crash.options.email}</p>
      <p>{messages.app.crash.options.reset}</p>
      <p>{email}</p>
    </div>
  );
}

export default AppErrorBoundaryFallback;
