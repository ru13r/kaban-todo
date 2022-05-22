import { FC } from 'react';
import { PathRouteProps } from 'react-router-dom';

enum Pages {
  Welcome,
  Page1,
  Page2,
  NotFound,
}

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  icon?: FC;
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
export { Pages };
