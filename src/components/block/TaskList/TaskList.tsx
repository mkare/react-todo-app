import React, { useEffect } from "react";
import { Task, TaskProps } from "components";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "store";
import "./TaskList.scss";

export type TaskListProps = {
  tasks?: TaskProps[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = fetchTodos();
    dispatch(fetch);
  }, [dispatch]);

  return (
    <ul className="task-list">
      {todos?.map((item: TaskProps) => (
        <li key={item.id}>
          <Task {...item} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
