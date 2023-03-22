// This file is used to export all components from the components folder
// base components
export { default as Button } from "./base/Button/Button";
export { default as Input } from "./base/Input/Input";
export { default as Checkbox } from "./base/Checkbox/Checkbox";
export { default as Icon } from "./base/Icon/Icon";

// block components
export { default as AddTask } from "./block/AddTask/AddTask";
export { default as EditTask } from "./block/EditTask/EditTask";
export { default as Task } from "./block/Task/Task";
export { default as TaskList } from "./block/TaskList/TaskList";

// layout components
export { default as Container } from "./layout/Container/Container";

// types
export type { TaskProps } from "./block/Task/Task";
export type { TaskListProps } from "./block/TaskList/TaskList";
