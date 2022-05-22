import { Route, Routes } from 'react-router-dom';

import routes from '..';

function Pages() {
  return (
    <div>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </div>
  );
}

export default Pages;
