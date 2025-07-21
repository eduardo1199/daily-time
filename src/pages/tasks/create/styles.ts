import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Grid)(() => ({
  height: '100vh',
  overflowY: 'auto',
  overflowX: 'hidden',
}))

export const Label = styled(Typography)(() => ({
  fontWeight: 'bold',
  color: '#166e50',
  fontSize: '1rem'
}))

export const Field = styled(TextField)(() => ({
  borderRadius: '0.5rem',

  '.MuiOutlinedInput-input': {
    padding: '6px 10px !important',
    fontSize: '1rem',
    color: '#166e50',
    border: '#166e50',

    '&:focus': {
      border: '#166e50',
    }
  },
}))

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

export const Line = styled(Box)(() => ({
  border: '1px solid #99c5b5',
  height: '100%'
}))

export const TaskTitle = styled(Typography)(() => ({
  fontWeight: 'bold',
  color: '#166e50',
  fontSize: '1.5rem'
}))

export const ButtonComponent = styled(Button)(() => ({
  background: '#2b9f66',
  marginLeft: '0.25rem'
}))

export const ButtonSave = styled(Button)(() => ({
  background: '#2b9f66',
  marginLeft: '0.25rem'
}))

export const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '1rem',
}))

export const Task = styled(Typography)(() => ({
  fontWeight: 'bold',
  color: '#ffffffff',
  fontSize: '0.75srem'
}))

export const TaskContainer = styled(Grid)(() => ({
  background: '#73c2fb',
  padding: '0.25rem',
  borderRadius: '4px'
}))

export const ErrorLabel = styled(Typography)(() => ({
  fontWeight: 'normal',
  fontSize: '0.75rem',
}))
