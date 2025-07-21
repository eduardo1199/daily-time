import { Grid, styled, Typography } from "@mui/material";

export const Title = styled(Typography)(() => ({
  fontWeight: 'bold',
  color: '#166e50',
  fontSize: '2rem'
}))

export const Description = styled(Typography)(() => ({
  fontWeight: 'bold',
  color: '#166e50',
  fontSize: '1.75rem'
}))

export const TaskTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  color: '#166e50',
  fontSize: '1.5rem'
}))

export const TaskContainer = styled(Grid)(() => ({
  background: '#73c2fb',
  padding: '0.25rem',
  borderRadius: '4px'
}))
