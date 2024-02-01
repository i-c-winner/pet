import { Main } from '../../pages/Main';
import { TopMenu } from '../../widgets/topMenu/TopMenu';
import { Box  } from '@mui/material';
import { Bottom } from '../../widgets/main/Bottom';
import {RouterProvider} from 'react-router-dom';
import router from '../rout/router';

const Index = () => {
  return <Box sx={{
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'column',
    height: '100vh'
  }} >
    <TopMenu/>
    <RouterProvider router={router} />
    <Bottom />
  </Box>;

};

export default Index;

