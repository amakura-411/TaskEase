import { h } from 'preact'
import Tasks from '../../components/tasks'
import { useState } from 'preact/hooks'
import AddTask from '../../components/tasks/add'
import style from './style.css'

function index() {
    return (
        <div>
            <h1 className={style.content}>Tasks</h1>
            <Tasks />
            <AddTask />
        </div>
    )
}

export default index
