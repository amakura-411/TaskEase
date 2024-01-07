import { h } from 'preact'
import style from './style.css'
import { useEffect, useState } from 'preact/hooks'

// // 送信データの型定義
type postData = {
    title: string
    description?: string
    deadline: Date
}

const AddTask = () => {
    const [value, setValue] = useState({
        title: '',
        description: '',
        deadline: null
    })

    const postTask = async (data: postData) => {
        try {
            const res = await fetch('http://localhost:3000/task/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json())
            alert('追加に成功しました')
            setShowModak(false)
            // リロードする
            location.reload()
            return res
        } catch (e) {
            alert('追加に失敗しました')
            console.log(e)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // valueとpostDataの型が違うので、型を合わせる
        const postdata: postData = {
            title: value.title,
            description: value.description,
            deadline: value.deadline
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
        const yesterday = new Date(now.setDate(now.getDate()))
        // 秒数を0にする
        yesterday.setSeconds(0)
        yesterday.setMinutes(0)
        yesterday.setHours(0)
        console.log(yesterday)
        if (new Date(postdata.deadline) < yesterday) {
            alert('締切日は今日以降にしてください')
            return
        }
        postTask(postdata)
    }

    const onInput = (e) => {
        setValue((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const [showModak, setShowModak] = useState(false)
    const toggleModal = () => {
        setShowModak(!showModak)
    }

    return (
        <div>
            {showModak ? (
                <div>
                    <div className={style.modal_container}>
                        <div className={style.modal}>
                            <div className={style.modalTitle}>
                                <h2>AddTask</h2>
                            </div>
                            <div className={style.modalContent}>
                                <form
                                    onSubmit={onSubmit}
                                    className={style.modalForm}
                                >
                                    <label htmlFor="title">TITLE</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Task"
                                        onInput={onInput}
                                    />
                                    <label htmlFor="description">
                                        DESCRIPTION
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        placeholder="Task description"
                                        onInput={onInput}
                                    />
                                    <label htmlFor="deadline">DEADLINE</label>
                                    <input
                                        type="datetime-local"
                                        name="deadline"
                                        id="deadline"
                                        onInput={onInput}
                                    ></input>
                                    <input type="submit" value="Add Task" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <button
                        className={style.addButton}
                        id={style.no}
                        onClick={toggleModal}
                    >
                        &#0215;
                    </button>
                </div>
            ) : (
                <button
                    className={style.addButton}
                    id={style.plus}
                    onClick={toggleModal}
                >
                    &#0043;
                </button>
            )}
        </div>
    )
}

export default AddTask
