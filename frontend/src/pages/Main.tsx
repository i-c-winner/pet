import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Api } from '../functions/api/Api';
import { MainMenu } from '../widgets/main/MainMenu.tsx';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const Main = () => {


  return <Container>
    <Typography sx={
      {
        fontSize: '3em',
        margin: '0 auto',
        padding: '5vh 0 ',
        color: '#2765f9',
        textAlign: 'center'
      }
    }>
      Сервис для поиска специалистов в разработке PetProjects и поска интересного PetProject,
      что бы присоеденитсья к команде.
    </Typography>
    <Stack direction="row" spacing={5} textAlign="center" justifyContent="center">
      <Link to="/projects">
        <MainMenu title={'Проекты'} key="projects" type="projects"><Typography sx={{ color: 'black' }}>проеты</Typography></MainMenu>
      </Link>

      <MainMenu title={'Участники'} key="users" type={"users"}><Typography
        sx={{ color: 'black' }}>проеты</Typography></MainMenu>
      <MainMenu title={'Лушие проекты'} key="bestProjects" type={"bestProjects"}><Typography
        sx={{ color: 'black' }}>проеты</Typography></MainMenu>
    </Stack>
  </Container>;

};

export { Main };
