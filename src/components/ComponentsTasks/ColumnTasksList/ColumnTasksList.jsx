import { TaskCard } from "../TaskCard/TaskCard";
import './ColumnTasksList.css';
export const ColumnTasksList = ({tasks, column}) => {
  //!!!!!!!!!!!!!!!!!!TESTING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
  let taskRander = [];

  // Перевірка яка Колонка для тасків
  if (column === "Done") {
    taskRander = tasks.done;
  }

  if (column === "In progress") {
    taskRander = tasks.inprogress;
    // taskRander = tasks.in-progress ;
  }

  if (column === "To do") {
    taskRander = tasks.todo;
  }

  
  return (
    <div className="tasksWrapper">
    { !taskRander ? "" :
    <>
    {taskRander.map((task, index) => (
      <TaskCard
        key={index}
        task={task}
        // onOpen={onOpen}
        // setAction={setAction}
        // setColumn={setColumn}
        index={index}
      />
        ))}
      </>
      }
  </div>

  );
};

