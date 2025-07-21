import { Box } from "@mui/material";
import { ButtonComponent, ErrorLabel, Field, Form, Label, SystemName, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { z } from 'zod'
import dayjs from "dayjs";
import { zodResolver } from '@hookform/resolvers/zod';

const SignInFormSchema = z.object({
  name: z.string().min(1, 'Insira seu nome'),
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { error: 'E-mail inválido' }),
  birthDay: z.string({ error: 'Insira uma data válida' }),
  occupation: z.string().min(1, 'Insira sua ocupação'),
  password: z.string().min(8, 'A senha deve conter no mínimo 8 caracteres'),
  confirmPassword: z.string().min(8, 'A senha deve conter no mínimo 8 caracteres'),
}).refine(data => data.password === data.confirmPassword, {
  error: 'Senhas não conferem',
  path: ['confirmPassword', 'password']
})

export type SignInForm = z.infer<typeof SignInFormSchema>

export function SignIn() {
  const { register, handleSubmit, control, formState: { errors } } = useForm<SignInForm>({ resolver: zodResolver(SignInFormSchema), })

  const navigate = useNavigate()

  function handleSubmitRegister(data: SignInForm) {
    console.log(data)
  }

  return (
    <Box display="flex" width={'100%'} height="100vh">
      <Box display="flex" alignItems={'center'} justifyContent={'center'} width='40%' bgcolor="#166e50" flexDirection={'column'} textAlign="start">
        <Title>Faça seu cadastro no <SystemName>DailyTime.</SystemName></Title>
      </Box>

      <Box display="flex" flex="1" overflow={'auto'} padding={5}>
        <Form onSubmit={handleSubmit(handleSubmitRegister)}>
          <Box display="flex" width={'100%'} flexDirection={'column'} bgcolor="white" padding={4} gap={1} borderRadius={1}>

            <Label color={errors?.name ? 'error' : 'primary'}>Nome</Label>
            <Field {...register('name')} error={!!errors?.name} />
            {!!errors?.name && <ErrorLabel color="error">{errors.name.message}</ErrorLabel>}

            <Label color={errors?.email ? 'error' : 'primary'}>E-mail</Label>
            <Field {...register('email')} error={!!errors?.email}></Field>
            {!!errors?.email && <ErrorLabel color="error">{errors.email.message}</ErrorLabel>}

            <Label color={errors?.birthDay ? 'error' : 'primary'}>Data de nascimento</Label>
            <Controller
              control={control}
              name="birthDay"
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  onChange={(value) => onChange(value?.toString())}
                  closeOnSelect
                  disableFuture
                  format="DD/MM/YYYY"
                  value={value ? dayjs(value) : null}
                  slots={{
                    textField: Field
                  }}
                  enableAccessibleFieldDOMStructure={false}
                />
              )}
            />
            {!!errors?.birthDay && <ErrorLabel color="error">{errors.birthDay.message}</ErrorLabel>}

            <Label color={errors?.occupation ? 'error' : 'primary'}>Ocupação profissional</Label>
            <Field {...register('occupation')} error={!!errors?.occupation}></Field>
              {!!errors?.occupation && <ErrorLabel color="error">{errors.occupation.message}</ErrorLabel>}

            <Label color={errors?.password ? 'error' : 'primary'}>Senha</Label>
            <Field {...register('password')} error={!!errors?.password}></Field>
            {!!errors?.password && <ErrorLabel color="error">{errors.password.message}</ErrorLabel>}

            <Label color={errors?.confirmPassword ? 'error' : 'primary'}>Confirmar senha</Label>
            <Field {...register('confirmPassword')} error={!!errors?.confirmPassword}></Field>
            {!!errors?.confirmPassword && <ErrorLabel color="error">{errors.confirmPassword.message}</ErrorLabel>}

            <Box display="flex" width={'100%'} justifyContent={'space-between'} mt={2}>
              <ButtonComponent variant="contained" onClick={() => navigate('/')}>Voltar</ButtonComponent>
              <ButtonComponent variant="contained" type="submit">Cadastrar</ButtonComponent>
            </Box>
          </Box>
        </Form>
      </Box>
    </Box>
  )
}