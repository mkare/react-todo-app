import React, { useState } from "react";
import { Button, Checkbox, Icon, EditTask } from "components";
import { Delete, Edit } from "icons";
import { useDispatch } from "react-redux";
import { deleteTodoAsync, updateTodoAsync } from "store";
import "./Task.scss";

export type TaskProps = {
  id: string;
  content: string;
  createdAt: string;
  isCompleted: boolean;
};

const DeleteIcon = <Icon icon={Delete} />;
const EditIcon = <Icon icon={Edit} />;

const Task: React.FC<TaskProps> = ({ id, content, createdAt, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const action = deleteTodoAsync(id);
    dispatch(action);
  };

  const handleComplete = () => {
    const action = updateTodoAsync({
      id,
      content,
      isCompleted: !isCompleted,
    });
    dispatch(action);
  };

  return (
    <>
      <label className="task-item" id={`task${id}`}>
        <div>
          {isEditing ? (
            <EditTask
              id={id}
              value={content}
              onDiscard={() => setIsEditing(false)}
            />
          ) : (
            <>
              <Checkbox checked={isCompleted} onChange={handleComplete} />
              <p className={`${isCompleted && "overlined"}`}>{content}</p>
            </>
          )}
        </div>
        <div>
          <Button
            variant="link"
            onClick={() => setIsEditing(!isEditing)}
            icon={EditIcon}
          />
          <Button
            variant="link"
            className="danger"
            onClick={handleDelete}
            icon={DeleteIcon}
          />
        </div>
      </label>
    </>
  );
};

export default Task;
