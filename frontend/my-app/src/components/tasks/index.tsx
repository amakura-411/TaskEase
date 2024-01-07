import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import style from './style.css'
import EditTask from './edit'

type Tasks = {
    id: string
    title: string
    description?: string
    status: string
    createdAt: Date
    updatedAt?: Date
    deadline: Date
}

const getTasks = async () => {
    const response = await fetch('http://localhost:3000/task').then((res) =>
        res.json()
    )
    return response
}

const randomClass = (status: string) => {
    // If the status is "complete", return "complete"
    // Otherwise, return "incomplete"
    return status == '完了' ? style.complete : style.incomplete
}

const Tasks = () => {
    const [tasks, setTasks] = useState<Tasks[]>(null)
    const [editingTaskId, setEditingTaskId] = useState<string>(null)
    useEffect(() => {
        getTasks().then((tasks) => {
            setTasks(
                tasks.map((task) => ({
                    id: task._id,
                    title: task.title,
                    description: task.description,
                    status: task.status,
                    createdAt: task.createdAt,
                    updatedAt: task.updatedAt,
                    deadline: task.deadline
                }))
            )
        })
    }, [])

    const handleEditClick = (id: string) => {
        console.log(id)
        setEditingTaskId(id) // 編集中のタスクのIDをセットし、編集モードに入る
    }
    const handleDeleteClick = async (id: string) => {
        try {
            await fetch(`http://localhost:3000/task/remove/${id}`, {
                method: 'DELETE'
            })
            console.log('削除しました')
            // アラートを表示
            alert('削除しました')
            setTasks(tasks.filter((task) => task.id !== id))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={style.content}>
            {tasks ? (
                <ul className={style.cards}>
                    {tasks.map((task) => (
                        <li key={task.id} className={`${style.card}`}>
                            <a href={`/tasks/${task.id}`} value={task.id}>
                                <div className={style.cardTitle}>
                                    <h3 className={style.title}>
                                        {task.title}
                                    </h3>
                                </div>
                                <span className={randomClass(task.status)}>
                                    {task.status}
                                </span>
                                <div>作成日:{task.createdAt}</div>
                                {task.updatedAt ? (
                                    <div>更新日:{task.updatedAt}</div>
                                ) : null}
                                <div>期限:{task.deadline}</div>
                            </a>
                            <button
                                className={style.deleteButton}
                                onClick={() => handleDeleteClick(task.id)}
                            >
                                削除
                            </button>
                            <button
                                onClick={() => handleEditClick(task.id)}
                                className={style.editButton}
                            >
                                編集
                            </button>
                            {editingTaskId === task.id && ( // 編集モードのタスクにだけEditTaskを表示
                                <EditTask id={editingTaskId} />
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p class={style.nodata}>データがありません</p>
            )}
        </div>
    )
}
export default Tasks
