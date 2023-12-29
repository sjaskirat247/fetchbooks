import Typography from '@mui/material/Typography';

export default function Title(props) {
  return <Typography variant="h5">
    {props.children}
  </Typography>
}