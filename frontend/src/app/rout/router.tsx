import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../../pages/Main';
import { Projects } from '../../pages/Projects';
import {CreateProject} from '../../pages/CreateProject';

const routes = [
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/projects',
    element: <Projects/>,
    children: [ {
      path: ':project',
      element: <Projects/>
    } ]
  },
  {
    path: '/create-project',
    element: <CreateProject />
  }
];
const router = createBrowserRouter(routes);
export default router
