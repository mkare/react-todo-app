import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "store";
import { Button, Input, Icon } from "components";
import { Add } from "icons";
import "./AddTask.scss";

type AddTaskProps = {
  children?: React.ReactNode;
};

const AddIcon = <Icon icon={Add} />;

const AddTask: React.FC<AddTaskProps> = ({ children }) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task) {
      const action = addTodoAsync(task);
      dispatch(action);
      setTask("");
    }
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <Input
        name="addTask"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
      />
      <Button
        variant="primary"
        icon={AddIcon}
        type="submit"
        disabled={task ? false : true}
      />
    </form>
  );
};

export default AddTask;
