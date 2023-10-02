import React, {useState, KeyboardEvent, useRef, ChangeEvent} from 'react';
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
    changeFilter: (value: FilterValuesType) => void
    filter: FilterValuesType
    deleteAllTask: () => void
    changeTaskStatus: (id: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {

    // const titleInput = useRef<HTMLInputElement>(null)
    const [title, setTitle] = useState('')

    // const [filter, setFilter] = useState<FilterValuesType>("all");
    const [error, setError] = useState<string | null>(null)

    const tasks = props.tasks;

    // const tasksForTodolist = filter === "active" ? tasks.filter(t => !t.isDone) : filter === "completed" ? tasks.filter(t => t.isDone) : filter === "three" ? tasks.filter((t, i) => i < 3) : tasks;

    // function changeFilter(value: FilterValuesType) {
    //     setFilter(value);
    // }

    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }
    const onThreeClickHandler = () => {
        props.changeFilter("three")
    }

    const addTaskHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError('Title is required')
        }
            setTitle('')
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
        setError(null)
        if (e.key === "Enter") {
            addTaskHandler()
        }
    }

    const innerJSXTasks = props.tasks.map(t => {
        const onClickHandler = () => {
            props.removeTask(t.id)
        }
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const newIsDoneValue = e.currentTarget.checked
            props.changeTaskStatus(t.id, newIsDoneValue)
        }
        return (<li className={t.isDone ? 'is-done' : ''} key={t.id}>
            <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/>
            <span>{t.title}</span>
            <button onClick={onClickHandler}>x
            </button>
        </li>)
    })

    const isAddBtnDisabled = !title || title.length >= 15

    return <div className={'todolist'}>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? 'error' : ''} onKeyDown={onKeyDownEnter} onChange={onInputChange} value={title}/>
            {/*<input ref={titleInput} onKeyDown={() => {*/}
            {/*}}/>*/}
            <button
                disabled={isAddBtnDisabled}
                onClick={addTaskHandler}>+
            </button>
            {/*<button onClick={() => {*/}
            {/*    if (titleInput.current !== null) {*/}
            {/*        addTaskHandler(titleInput.current.value);*/}
            {/*        titleInput.current.value = ''*/}
            {/*    }*/}
            {/*}}>+*/}
            {/*</button>*/}
            {error && <div className={'error-message'}>{error}</div>}
            {!error && <div>
                <span>{title.length < 15 ? "Enter your task" : "Your task name too long"}</span>
            </div>}
        </div>
        <ul>
            {innerJSXTasks}
        </ul>
        <div>
            <button onClick={props.deleteAllTask}>DELETE ALL TASKS</button>
        </div>
        <div>
            <button className={props.filter === 'three' ? 'active-filter' : ''} onClick={onThreeClickHandler}>
                Three
            </button>
            <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>
                All
            </button>
            <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>
                Active
            </button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>
                Completed
            </button>
        </div>
    </div>
}
