import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodoAsync } from "store";
import { Button, Input } from "components";
import "./EditTask.scss";

type EditTaskProps = {
  id: string;
  value: string;
  onDiscard: () => void;
};

const EditTask: React.FC<EditTaskProps> = ({ id, value, onDiscard }) => {
  const [newContent, setNewContent] = useState(value);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newContent) {
      const action = updateTodoAsync({
        id,
        content: newContent,
        isCompleted: false,
      });
      dispatch(action);
      setNewContent("");
      onDiscard();
    }
  };

  return (
    <form className="edit-task" onSubmit={handleSubmit}>
      <Input
        name="addTask"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        placeholder=""
      />

      <Button
        variant="light"
        disabled={newContent ? false : true}
        onClick={onDiscard}
      >
        Discard
      </Button>

      <Button
        variant="primary"
        type="submit"
        disabled={newContent ? false : true}
      >
        Save
      </Button>
    </form>
  );
};

export default EditTask;
