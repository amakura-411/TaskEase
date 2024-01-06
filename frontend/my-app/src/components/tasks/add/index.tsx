import { h } from 'preact'
import style from './style.css'
import { useState } from 'preact/hooks'

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
        deadline: new Date()
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
            console.log(res)
            confirm('追加しました')
            setShowModak(false)
            return res
        } catch (e) {
            console.log(e)
            confirm('追加できませんでした' + e)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        // valueとpostDataの型が違うので、型を合わせる
        const postdata: postData = {
            title: value.title,
            description: value.description,
            deadline: value.deadline
        }
        // もし、１つでも殻がある場合、アラートを出す
        if (!postdata.title || !postdata.description || !postdata.deadline) {
            alert('入力してください')
            return
        }
        console.log(postdata)
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
        console.log('toggleModal:' + showModak)
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
                                        type="date"
                                        name="deadline"
                                        id="deadline"
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
