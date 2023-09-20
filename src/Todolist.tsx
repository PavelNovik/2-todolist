import React, { useState } from 'react';
import { FilterValuesType } from './App';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    // changeFilter: (value: FilterValuesType) => void
    deleteAllTask: () => void
}

export function Todolist(props: PropsType) {

    const [filter, setFilter] = useState<FilterValuesType>("all");

    const tasks = props.tasks;

    const tasksForTodolist = filter === "active" ? tasks.filter(t => !t.isDone) : filter === "completed" ? tasks.filter(t => t.isDone) : filter === "three" ? tasks.filter(t => t.id < 4) : tasks;

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            {
                tasksForTodolist.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone} />
                    <span>{t.title}</span>
                    <button onClick={() => { props.removeTask(t.id) }}>x</button>
                </li>)
            }
        </ul>
        <div><button onClick={props.deleteAllTask}>DELETE ALL TASKS</button></div>
        <div>
            <button onClick={() => { changeFilter("three") }}>
                Three
            </button>
            <button onClick={() => { changeFilter("all") }}>
                All
            </button>
            <button onClick={() => { changeFilter("active") }}>
                Active
            </button>
            <button onClick={() => { changeFilter("completed") }}>
                Completed
            </button>
        </div>
    </div>
}
