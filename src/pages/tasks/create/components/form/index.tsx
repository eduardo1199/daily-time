import { DeleteOutline, HelpOutline, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material"
import { Grid, IconButton, Tooltip } from "@mui/material"
import { ButtonComponent, ButtonSave, ErrorLabel, Field, Form, Label, Task, TaskContainer } from "../../styles"
import type { CreateTaskForm } from "../.."
import { useFormContext } from "react-hook-form"
import { useState } from "react"

interface FormTaskProps {
  onTogglePreview: () => void
  showPreview: boolean
}
export function FormTask({ onTogglePreview, showPreview }: FormTaskProps) {
  const { setValue, getValues, handleSubmit, register, formState: {  errors }, watch } = useFormContext<CreateTaskForm>()

  const [titleTasks, setTitleTasks] = useState('')

  async function handleSubmitCreateTask(data: CreateTaskForm) {
    console.log(data)
  }

  function handleAddTask() {
    if(!titleTasks.trim()) {
      return
    }

    const currentTasks = getValues('tasks')
    const hasTaskInCurrentState = currentTasks.some((task) => task === titleTasks)

    if(hasTaskInCurrentState) {
      return
    }
    
    const newValuesTasks = [titleTasks, ...currentTasks]
    setValue('tasks', newValuesTasks)
    setTitleTasks('')
  }

  function handleDeleteTask(task: string) {
    const currentTasks = getValues('tasks')

    const filteredTasks = currentTasks.filter((currentTask) => currentTask !== task)
    setValue('tasks', filteredTasks)
  }

  const tasks = watch('tasks')

  return (
    <Form onSubmit={handleSubmit(handleSubmitCreateTask)}>
      <Grid container justifyContent="space-between">
        <Tooltip title={showPreview ? "Ocultar preview" : "Mostrar preview"}>
          <IconButton onClick={onTogglePreview}>
            {showPreview ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
          </IconButton>
        </Tooltip>
        <ButtonSave variant="contained" type="submit">
          Criar atividade
        </ButtonSave>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Label>Nome da atividade *</Label>
        <Field 
          fullWidth 
          {...register('name')}
          error={!!errors?.name}
        />
        {!!errors?.name && <ErrorLabel color="error">{errors.name.message}</ErrorLabel>}
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Label>Descrição da atividade *</Label>
        <Field 
          fullWidth 
          multiline 
          rows={4} 
          {...register('description')} 
          error={!!errors?.description}
        />
        {!!errors?.description && <ErrorLabel color="error">{errors.description.message}</ErrorLabel>}
      </Grid>
      <Grid>
        <Grid container direction="row" gap={1} alignItems="center">
          <Label>
            Campo para Tarefas 
          </Label>
          <Tooltip title="Esse campo é opcional, você pode cadastrar suas tarefas para as atividades em outro momento">
            <HelpOutline style={{ color: "#ff6b6b"}} fontSize="small" />
          </Tooltip>
        </Grid>
        <Grid container direction="column" gap={2}>
          <Grid container direction="row" alignItems="center">
            <Grid size={{ xs: 10 }}>
              <Field 
                fullWidth 
                value={titleTasks} 
                onChange={(e) => setTitleTasks(e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 2 }}>
              <ButtonComponent 
                variant="contained" 
                onClick={handleAddTask}
              >
                Adicionar
              </ButtonComponent>
            </Grid>
          </Grid>

          {tasks.map((task) => {
            return (
              <TaskContainer container direction="row" alignItems="center" key={task}>
                <Grid>
                  <Task>{task}</Task>
                </Grid>
                <Grid marginLeft="auto">
                  <IconButton 
                    onClick={() => handleDeleteTask(task)}
                  >
                    <DeleteOutline color="info" />
                  </IconButton>
                </Grid>
              </TaskContainer>
            )
          })}
        </Grid>
      </Grid>
    </Form>
  )
}