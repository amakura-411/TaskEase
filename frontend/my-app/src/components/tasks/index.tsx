import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

type Tasks = {
    id: string;
    title: string;
    description?: string;
    status: string;
    createdAt: Date;
    updatedAt?: Date;
    deadline: Date;
};

const getTasks = async () => {
    const response = await fetch('http://localhost:3000/task').then((res) =>
        res.json()
    );
    console.log(response);
    return response;
};

const randomClass = (status:string) => {
    // If the status is "complete", return "complete"
    // Otherwise, return "incomplete"
    return status == 'todo' ? style.complete : style.incomplete;
};

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getTasks().then((tasks) => {
            setTasks(tasks);
        });
    }, []);

    return (
        <div>
            {tasks ? (
                <ul className={style.cards}>
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className={`${style.card} ${randomClass(task.status)}`}
                        >
                            {task.title}:{task.status}
                            <div>作成日:{task.createdAt}</div>
                            {task.updatedAt ? <div>更新日:{task.updatedAt}</div> : null}
                            <div>期限:{task.deadline}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p class={style.nodata}>データがありません</p>
            )}
        </div>
    );
};

export default Tasks;