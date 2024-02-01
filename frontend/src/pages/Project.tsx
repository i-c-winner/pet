import { Box } from '@mui/material';
interface IProps {
  data: string
}

function Project (props: IProps) {
  const project=JSON.parse(props.data)
  console.log(project)

  return <Box> <p>{project.name}</p> </Box>
}
export {Project}
