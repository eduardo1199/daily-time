import { HelpOutline } from "@mui/icons-material";
import { Checkbox, FormControlLabel, Grid, Grow, Tooltip } from "@mui/material";
import { Description, TaskContainer, TaskTitle, Title } from "./styles";
import { useFormContext } from "react-hook-form";
import type { CreateTaskForm } from "../..";
import { Task } from "../../styles";

interface TaskPreviewProps {
  showPreview: boolean
}
export function TaskPreview({ showPreview }:TaskPreviewProps ) {
  const { watch } = useFormContext<CreateTaskForm>()

  const name = watch('name')
  const description = watch('description')
  const tasks = watch('tasks')

  return (
    <Grow
        in={showPreview}
        style={{ transformOrigin: '0 0 0' }}
        {...(showPreview ? { timeout: 2000 } : {})}
      >
      <Grid container size={{ xs: showPreview ? 5 : 0  }} spacing={5} direction="column">
        <Grid>
          <Title>
            {name ? `${name} ⭐` : `Título da atividade ⭐`}
          </Title>
        </Grid>
        <Grid>
          <Description>
            {description ? `${description}📕` : `Descrição da atividade📕`}
          </Description>
        </Grid>
        <Grid>
          <Grid container direction="row" gap={2} alignItems="center">
            <TaskTitle>
              Amostragem de tarefas 
            </TaskTitle>
            <Tooltip title="As tarefas serão amostradas abaixo, esse campo é apenas de visualização e não interfere nos resultados reais">
              <HelpOutline style={{ color: "#ff6b6b"}} />
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={1}>
          {tasks.length > 0 && (
            <TaskTitle>
              Tarefas
            </TaskTitle>
          )}

          {tasks.map((task) => {
            return (
              <TaskContainer key={task} size={{ xs: 12 }}>
                <FormControlLabel
                  control={
                    <Checkbox checked={false} onChange={() => {}} name={task} disabled />
                  }
                  label={<Task>{task}</Task>}
                />
              </TaskContainer>
            )
          })}
        </Grid>
      </Grid>
    </Grow>
  )
}