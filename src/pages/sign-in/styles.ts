import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Title = styled(Typography)(() => ({
  fontWeight: 'bold',
  color: 'white',
  fontSize: '36px'
}))

export const SystemName = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '36px',
  color: '#183935',
  textAlign: 'start'
}))

export const Label = styled(Typography)((props) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
  color: `${props.color === 'error' ? 'error' : '#99c5b5'}`,
  textAlign: 'start'
}))

export const ButtonComponent = styled(Button)(() => ({
  background: '#2b9f66'
}))

export const ErrorLabel = styled(Typography)(() => ({
  fontWeight: 'normal',
  fontSize: '0.75rem',
}))

export const Field = styled(TextField)(() => ({
  borderRadius: '0.5rem',

  '& .MuiOutlinedInput-input': {
    padding: '6px 10px',
    fontSize: '1rem',
    color: '#166e50',
    border: '#166e50',

    '&:focus': {
      border: '#166e50',
    }
  },
}))

export const Form = styled('form')(() => ({
  width: '100%',
  overflow: 'auto',
  margin: 'auto',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
}))