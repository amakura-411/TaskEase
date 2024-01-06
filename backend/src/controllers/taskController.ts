import { Request, Response } from 'express'
import Task from '../models/task' // Taskモデルのインポートを想定
import { connectDatabase, closeDatabase } from '../frameworks/db/connect'

export const TaskController = {
    index: async (req: Request, res: Response) => {
        try {
            console.log('index start')
            // データベース接続
            await connectDatabase()
            const tasks = await Task.find()
            // データベース接続を閉じる
            await closeDatabase()
            res.status(200).send(tasks)
        } catch (err) {
            res.status(500).send(err) // エラーを適切な形でクライアントに返す
            console.error(err)
        }
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            await connectDatabase()
            const task = await Task.findById(id)
            if (!task) {
                res.status(404).send({ message: 'タスクが見つかりません' })
                return
            }
            await closeDatabase()
            res.status(200).send(task)
        } catch (err) {
            res.status(500).send(err) // エラーを適切な形でクライアントに返す
            console.error(err)
        }
    },

    add: async (req: Request, res: Response) => {
        // リクエストボディからタスク情報を取得
        const { title, description, deadline } = req.body
        const status = '未着手'
        console.log(req.body)

        try {
            // タスクを作成
            await connectDatabase()
            const task = await Task.create({
                title,
                description,
                status,
                createdAt: Date.now(),
                deadline
            })
            await closeDatabase()
            res.status(200).send(task)
        } catch (err) {
            res.status(500).send(err) // エラーを適切な形でクライアントに返す
            console.error(err)
        }
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params
        // requestBodyの内容は複数あるので、一旦分割しておく
        // 1. statusの更新
        // 2. titleの更新
        // 3. descriptionの更新
        // 4. deadlineの更新
        const { status, title, description, deadline } = req.body
        const updateData = {
            status,
            title,
            description,
            deadline,
            updatedAt: Date.now()
        }

        try {
            await connectDatabase()
            // 更新対象のタスクを取得
            const task = await Task.findById(id)
            // 更新対象のタスクが存在しない場合はエラーを返す
            if (!task) {
                res.status(404).send({
                    message: '更新対象のタスクが存在しません'
                })
                return
            }
            // 更新対象のタスクが存在する場合は、更新を実行する
            await Task.findByIdAndUpdate(id, updateData)
            await closeDatabase()
            res.status(200).send({ message: '更新しました' })
        } catch (err) {
            res.status(500).send(err) // エラーを適切な形でクライアントに返す
            console.error(err)
        }
    },

    remove: async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            await connectDatabase()
            await Task.findByIdAndDelete(id)
            res.status(200).send({ message: '削除しました' })
        } catch (err) {
            res.status(500).send(err) // エラーを適切な形でクライアントに返す
            console.error(err)
        }
    }
}
