import { useEffect, useState } from 'react';
import { Api } from '../functions/api/Api';
import {styled} from '@mui/material';
import { getRandomText } from '../functions/plugins/getRandomText';
import { Typography, Box, Grid, List } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Project } from './Project';

const getApiProjects = new Api();

function Projects() {

  const [ currentProjects, setCurrentProjects ] = useState<any[]>([]);
  const Card = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 3px 3px grey",
    height: '150px',
    boxSizing: 'border-box',
    padding: '10px'
  }));

  useEffect(() => {
    getApiProjects.on('loadRequest', loadRequest);
    getApiProjects.on('loadendRequest', loadendRequest);
    getApiProjects.on('errorRequest', errorRequest);

    getApiProjects.open('GET', 'http://localhost/pet/?action=getItem&type=projects');

    getApiProjects.createListners();
    getApiProjects.send();

    function loadendRequest(...args: any[]) {
      console.log(typeof JSON.parse(args[0]))
      setCurrentProjects(JSON.parse(args[0]));
    }

    function loadRequest(...args: any[]) {
      return 'request';
    }

    function errorRequest(...args: any[]) {
      console.log(args, 'error');
    }
    function createProject() {

    }
  }, []);
  return <Box sx={{
    flexGrow: '1',
    width: '100%',
    textAlign: 'center',
    padding: '10px 30px',
    boxSizing: 'border-box'

  }}>
    <Typography variant="h2" sx={{
      paddingBottom: '25px',
      color: '#2765f9',
      fontWeight: 'bold'
    }}>Разрабатываемые проекты</Typography>
    <Grid  container spacing={4}>
      {currentProjects.map((project)=>{
       return  <Grid key={getRandomText(5)} item md={3} xs={6}>
          <Card>
            <Project data={project} key={getRandomText(5)}/>
          </Card>
        </Grid>
      })}
    </Grid>
    <Link to={'/create-project'}>Create</Link>
  </Box>;

}

export { Projects };
