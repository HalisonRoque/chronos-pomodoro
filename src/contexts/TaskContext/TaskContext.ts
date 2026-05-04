import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';

export type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps,
);
