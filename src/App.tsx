import React, { useState } from 'react';
import './App.css';
import Tasks from "./Task";
import { TaskType, Todolist } from './Todolist';

export type DataType = {
    title: string
    tasks: Array<TaskType>
    students: Array<string>
}

export type FilterValuesType = "all" | "active" | "completed" | "three";


function App() {

    const data1: DataType = {
        title: "What to do",
        tasks: [
            { id: 1, title: "HTML&CSS2", isDone: true },
            { id: 2, title: "JS2", isDone: true }
        ],
        students: [
            'Jago Wormald1',
            'Saul Milne2',
            'Aariz Hester3',
            'Dion Reeve4',
            'Anisa Ortega5',
            'Blade Cisneros6',
            'Malaikah Phelps7',
            'Zeeshan Gallagher8',
            'Isobella Vo9',
            'Rizwan Mathis10',
            'Menaal Leach11',
            'Kian Walton12',
            'Orion Lamb13',
            'Faizah Huynh14',
            'Crystal Vaughan15',
            'Vivien Hickman16',
            'Stuart Lu17',
            'Karol Davison18',
            'Dario Burns19',
            'Chloe Rich20',
            'Martyna Felix',
            'Nida Glass',
            'Maeve Miles',
            'Hasnain Puckett',
            'Ayman Cano',
            'Safwan Perry',
            'Fox Kelly',
            'Louise Barlow',
            'Malaki Mcgill',
            'Leanna Cline',
            'Willard Hodge',
            'Amelia Dorsey',
            'Kiah Porter',
            'Jeanne Daly',
            'Mohsin Armstrong',
            'Laurie Rangel',
            'Princess Tierney',
            'Kasim Kendall',
            'Darryl Cope',
            'Elysha Ray',
            'Liyana Harris',
            'Kashif Blackburn',
            'Atif Zimmerman',
            'Sila Hartley',
            'Ralphie Hebert',
        ]
    };
    const data2: DataType = {
        title: "What to learn",
        tasks: [
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true }
        ],
        students: [
            'Rick Kane',
            'Finnlay Bentley',
            'Samia North',
            'Isaac Morton',
            'Lily-Ann Clifford',
            'Thalia Park',
            'Sapphire Cruz',
            'Cieran Vazquez',
            'Anya Estes',
            'Dominika Field',
            'Rosanna Chung',
            'Safiyah Davey',
            'Ryley Beasley',
            'Kalvin Trejo',
            'Evie-Mae Farrell',
            'Juliet Valencia',
            'Astrid Austin',
            'Lyle Montgomery',
            'Nisha Mora',
            'Kylie Callaghan',
            'Star Wilks',
            'Marissa Colley',
            'Asa Fuller',
            'Leigh Kemp',
            'Avleen Dawson',
            'Sammy Bonilla',
            'Acacia Becker',
            'Coral Shepherd',
            'Melina Molina',
            'Kiran Bailey',
            'Clara Escobar',
            'Alexandru Horn',
            'Brandon-Lee Mercado',
            'Elouise Weston',
            'King Long',
            'Kerri Searle',
            'Kanye Hamer',
            'Elwood Benitez',
            'Mikail Whitaker',
            'Bobby Hardy',
            'Talha Ferry',
            'Priscilla Landry',
            'Olivia-Grace Cain',
            'Kiaan Wallace',
            'Wesley Padilla90',
            'Ella-Grace Wooten91',
            'Kaif Molloy92',
            'Kamal Broadhurst93',
            'Bianca Ferrell94',
            'Micheal Talbot95',
        ]
    };

    const [tasks, setTasks] = useState<TaskType[]>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Rest API", isDone: false },
        { id: 5, title: "GraphQL", isDone: false },
    ]);

    function removeTask(id: number) {
        const filteredTasks = tasks.filter(t => t.id !== id);
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
            <Tasks data={data1} />
            <Tasks data={data2} />
        </div>
    );
}

export default App;
