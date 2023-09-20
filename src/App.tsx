import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

export type FilterValuesType = "all" | "active" | "completed" | "three";


function App() {

    const [tasks, setTasks] = useState<TaskType[]>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Rest API", isDone: false },
        { id: 5, title: "GraphQL", isDone: false },
    ]);

    function removeTask(id: number) {
        const filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    // const [filter, setFilter] = useState<FilterValuesType>("all");

    // const tasksForTodolist = filter === "active" ? tasks.filter(t => !t.isDone) : filter === "completed" ? tasks.filter(t => t.isDone) : filter === "three" ? tasks.filter(t => t.id < 4) : tasks;

    // function changeFilter(value: FilterValuesType) {
    //     setFilter(value);
    // }

    const deleteAllTask = () => {
        setTasks([])
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                // tasks={tasksForTodolist}
                tasks={tasks}
                removeTask={removeTask}
                // changeFilter={changeFilter}
                deleteAllTask={deleteAllTask} />
        </div>
    );
}

export default App;
