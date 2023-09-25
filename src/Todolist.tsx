import React, {useState, KeyboardEvent, useRef} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
    // changeFilter: (value: FilterValuesType) => void
    deleteAllTask: () => void
}

export function Todolist(props: PropsType) {

    const titleInput = useRef<HTMLInputElement>(null)
    const [title, setTitle] = useState('')

    const [filter, setFilter] = useState<FilterValuesType>("all");

    const tasks = props.tasks;

    const tasksForTodolist = filter === "active" ? tasks.filter(t => !t.isDone) : filter === "completed" ? tasks.filter(t => t.isDone) : filter === "three" ? tasks.filter((t, i) => i < 3) : tasks;

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    const onAllClickHandler = () => {
        changeFilter("all")
    }
    const onActiveClickHandler = () => {
        changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        changeFilter("completed")
    }
    const onThreeClickHandler = () => {
        changeFilter("three")
    }

    const addTaskHandler = () => {
        if (title.length !== 0) {
            props.addTask(title)
            setTitle('')
        }
    }
    // const addTaskHandler = (title: string) => {
    //     if (title.length !== 0) {
    //         props.addTask(title)
    //         setTitle('')
    //     }
    // }
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyDownEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTaskHandler()
        }
    }

    const innerJSXTasks = tasksForTodolist.map(t => {
        const onClickHandler = () => {
            props.removeTask(t.id)
        }
        return (<li key={t.id}>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            <button onClick={onClickHandler}>x
            </button>
        </li>)
    })

    const isAddBtnDisabled = !title || title.length >= 15

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onKeyDown={onKeyDownEnter} onChange={onInputChange} value={title}/>
            {/*<input ref={titleInput} onKeyDown={() => {*/}
            {/*}}/>*/}
            <button disabled={isAddBtnDisabled} onClick={addTaskHandler}>+</button>
            {/*<button onClick={() => {*/}
            {/*    if (titleInput.current !== null) {*/}
            {/*        addTaskHandler(titleInput.current.value);*/}
            {/*        titleInput.current.value = ''*/}
            {/*    }*/}
            {/*}}>+*/}
            {/*</button>*/}
            <div>
                <span>{title.length < 15 ? "Enter your task" : "Your task name too long"}</span>
            </div>
        </div>
        <ul>
            {innerJSXTasks}
        </ul>
        <div>
            <button onClick={props.deleteAllTask}>DELETE ALL TASKS</button>
        </div>
        <div>
            <button onClick={onThreeClickHandler}>
                Three
            </button>
            <button onClick={onAllClickHandler}>
                All
            </button>
            <button onClick={onActiveClickHandler}>
                Active
            </button>
            <button onClick={onCompletedClickHandler}>
                Completed
            </button>
        </div>
    </div>
}
