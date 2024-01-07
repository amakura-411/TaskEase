import { useParams } from 'next/navigation'
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import style from './style.css'

const getTask = async ({ id }) => {
    console.log(`http://localhost:3000/task/${id}`)
    const res = await fetch(`http://localhost:3000/task/${id}`).then((res) =>
        res.json()
    )
    console.log(res)
    return res
}

type Task = {
    id: string
    title: string
    description?: string
    status: string
    createdAt: string
    updatedAt?: string
    deadline: string
}

const TaskPage = (Props) => {
    const [task, setTask] = useState<Task | null>(null)
    // :idの部分を取得する
    console.log(Props.id)
    const id: string = Props.id
    console.log(id)

    useEffect(() => {
        getTask({ id }).then((res) => setTask(res))
    }, [id])
    if (!task) {
        return <div>Loading...</div>
    }

    return (
        <div className={style.content}>
            <h1>TaskPage</h1>
            <div className={style.task}>
                <div className="task__title">Task title:{task.title}</div>
                <div className="task__description">
                    Task description:{task.description}
                </div>
                <div className="task__status">Task status:{task.status}</div>
                <div className="task__created">
                    Task created:{task.createdAt}
                </div>
                {task.updatedAt ? (
                    <div className="task__updated">
                        Task updated:{task.updatedAt}
                    </div>
                ) : (
                    <div className="task__updated">
                        Task updated:----:--:--:--:--:--
                    </div>
                )}
                <div className="task__deadline">
                    Task deadline:{task.deadline}
                </div>
            </div>
            {/* ページリンク */}
            <a href="/tasks">戻る</a>
        </div>
    )
}

export default TaskPage
