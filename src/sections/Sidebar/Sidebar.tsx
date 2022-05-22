import { Link } from 'react-router-dom';

import routes from '@/routes';
import useSidebar from '@/store/sidebar';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();

  return (
    <div className={isSidebarOpen ? 'block' : 'hidden'}>
      <ul>
        {Object.values(routes)
          .filter((route) => route.title)
          .map(({ path, title }) => (
            <li key={path}>
              <div onClick={sidebarActions.close}>
                <p className={'py-3'}>Icon</p>
                <p>
                  <Link className={'px-5'} to={path}>
                    {title}
                  </Link>
                </p>
                <p>{title}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Sidebar;
