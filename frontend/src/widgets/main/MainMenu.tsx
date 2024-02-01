import { Box, Typography } from '@mui/material';
import { IconProjects, IconRating, IconParticipants } from '../../shared/img';

function MainMenu(props: {
  title: string,
  type: string,
  children: any
}) {
  function getIcons() {
    const size = '50px';
    if (props.type === "projects") {
      return <IconProjects width={size} height={size}/>;
    } else if (props.type === 'users') {
      return <IconParticipants width={size} height={size}/>;
    }
    return <IconRating width={size} height={size}/>;
  }

  return <Box sx={{
    width: '300px',
    height: '15vh',
    color: 'white'
  }}>
    <Box sx={{
      width: '70px',
      height: '70px',
      background: '#2765f9',
      borderRadius: "5px",
      boxShadow: '5px -5px 5px 5px rgba(18, 18, 208, .5)',
      margin: '0 auto',
      paddingTop: '10px',
      boxSizing: 'border-box'
    }}>
      {getIcons()}
    </Box>

    <Typography sx={{
      padding: '15px 0 15 15px',
      fontSize: '2em',
      color: "black"
    }}>{props.title}</Typography>
    {props.children}
  </Box>;
}

export { MainMenu };
