import { useState, useEffect } from 'react'
import style from './style.css'
import { h } from 'preact'

// // 送信データの型定義
type postData = {
    title: string
    description?: string
    status: string
    deadline: Date
}

const EditTask = ({ id }: { id: string }) => {
    const getTaskById = async (id: string) => {
        try {
            const res = await fetch(`http://localhost:3000/task/${id}`).then(
                (res) => res.json()
            )
            const taskDate = {
                title: res.title,
                description: res.description,
                status: res.status,
                deadline: new Date(res.deadline)
            }
            return taskDate
        } catch (e) {
            console.log(e)
        }
    }
    const taskDate = getTaskById(id)
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: '未完了',
        deadline: new Date()
    })

    // 一度だけ実行する
    useEffect(() => {
        taskDate.then((task) => {
            setTask({
                title: task.title,
                description: task.description,
                status: task.status,
                deadline: new Date(task.deadline)
            })
        })
    }, [])

    const postTask = async (data: postData) => {
        try {
            const res = await fetch(`http://localhost:3000/task/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json())
            alert('更新に成功しました')
            // リロードする
            location.reload()
            return res
        } catch (e) {
            alert('更新に失敗しました')
            console.log(e)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // valueとpostDataの型が違うので、型を合わせる
        const postdata: postData = {
            title: task.title,
            description: task.description,
            status: task.status,
            deadline: task.deadline
        }
        // もし、titleかdeadlineが空の場合、アラートを出す
        if (!postdata.title || !postdata.deadline) {
            alert('入力してください')
            return
        }

        // deadlineを日本時間にする
        const deadline = new Date(postdata.deadline)
        deadline.setHours(deadline.getHours() + 9)
        postdata.deadline = deadline

        // もし、deadlineが昨日以前の過去の日付の場合、アラートを出す
        const now = new Date()
        if (deadline < now) {
            alert('昨日以前の日付は入力できません')
            return
        }

        postTask(postdata)
    }

    const onChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
        // setTaskのdeadlineは、Date型なので、Date型にする
        if (e.target.name === 'deadline') {
            setTask({ ...task, deadline: new Date(e.target.value) })
        }
    }

    const [showEditModal, setShowEditModal] = useState(true)

    return (
        <div id="edit">
            {showEditModal ? (
                <div className={style.modal_container}>
                    <div className={style.modal}>
                        <div className={style.modalContent}>
                            <div className={style.modalTitle}>
                                <h2>EditTask</h2>
                            </div>
                            <div className={style.modalContent}>
                                <form
                                    onSubmit={onSubmit}
                                    className={style.modalForm}
                                >
                                    <div>
                                        <label for="title">タイトル</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={task.title}
                                            onInput={onChange}
                                        />
                                    </div>
                                    <div>
                                        <label for="description">説明</label>
                                        <textarea
                                            name="description"
                                            value={task.description}
                                            onInput={onChange}
                                        />
                                    </div>
                                    <div>
                                        <fieldset>
                                            <input
                                                type="radio"
                                                name="status"
                                                id="status_not_done"
                                                value="未完了"
                                                checked={
                                                    task.status === '未完了'
                                                }
                                                onChange={onChange}
                                            />
                                            <label htmlFor="status_not_done">
                                                未完了
                                            </label>
                                            <input
                                                type="radio"
                                                name="status"
                                                id="status_in_progress"
                                                value="作業中"
                                                checked={
                                                    task.status === '作業中'
                                                }
                                                onChange={onChange}
                                            />
                                            <label htmlFor="status_in_progress">
                                                作業中
                                            </label>
                                            <input
                                                id="status_done"
                                                type="radio"
                                                name="status"
                                                value="完了"
                                                checked={task.status === '完了'}
                                                onChange={onChange}
                                            />
                                            <label htmlFor="status_done">
                                                完了
                                            </label>
                                        </fieldset>
                                    </div>
                                    <div>
                                        <label for="deadline">期限</label>
                                        <input
                                            type="datetime-local"
                                            name="deadline"
                                            value={task.deadline
                                                .toISOString()
                                                .slice(0, 16)}
                                            onInput={onChange}
                                        />
                                    </div>
                                    <button type="submit">更新</button>
                                </form>
                                <button onClick={() => setShowEditModal(false)}>
                                    閉じる
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default EditTask
