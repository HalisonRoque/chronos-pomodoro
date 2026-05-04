import { useState } from 'react';
import { TaskContext } from './TaskContext';
import type { TaskStateModel } from '../../models/TaskStateModel';

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
};

type Props = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: Props) {
    const [state, setState] = useState(initialState);

    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    );
}