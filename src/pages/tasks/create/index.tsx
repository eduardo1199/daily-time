import { Grid } from "@mui/material";
import { Container, Line } from "./styles";
import { useState } from "react";
import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskPreview } from "./components/preview";
import { FormTask } from "./components/form";

const CreateTaskFormSchema = z.object({
  name: z.string().min(1, 'Insira o título da atividade'),
  description: z.string().min(10, 'A descrição deve conter no mínimo 10 caracteres'),
  tasks: z.array(z.string())
})

export type CreateTaskForm = z.infer<typeof CreateTaskFormSchema>

export function CreateTask() {
  const [showPreview, setShowPreview] = useState(true)

  const methods = useForm<CreateTaskForm>({ resolver: zodResolver(CreateTaskFormSchema), defaultValues: {
    description: '',
    name: '',
    tasks: []
  }})

  function handleTogglePreview() {
    setShowPreview((prevState) => !prevState)
  }

  return (
    <Container container gap={4} padding="1rem" height="100%">
      <FormProvider {...methods}>
        <Grid container size={{ xs: showPreview ? 6 : 10 }}>
          <FormTask 
            onTogglePreview={handleTogglePreview}
            showPreview={showPreview}
          />
        </Grid>

        <Grid container>
          <Line />
        </Grid>
        
        <TaskPreview 
          showPreview={showPreview}
        />
      </FormProvider>
    </Container>
  )
}