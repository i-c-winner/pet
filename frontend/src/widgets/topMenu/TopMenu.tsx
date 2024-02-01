import {getRandomText} from '../../functions/plugins/getRandomText';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const menuItems=['О нас', 'Что такое PetProjects', 'Зачем это нужно']

function TopMenu() {
  return (
    <Box sx={{
      padding: '20px 30px',
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <p className='font'>Logo</p>
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexGrow:'1',
      }}
      spacing={2} direction="row">
      {menuItems.map((item)=><Button key={getRandomText(5)} color='inherit' variant="text">{item}</Button>)}
    </Stack>
  </Box>

  );
}
export {TopMenu}
