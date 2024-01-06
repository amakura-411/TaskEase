import { Router } from 'express'
import { TaskController } from '../../controllers/taskController'

export const TaskRouter = () => {
    const router = Router()
    // 一覧表示
    router.get('/task', async (req, res) => {
        return await TaskController.index(req, res)
    })

    router.get('/task/:id', async (req, res) => {
        return await TaskController.show(req, res)
    })

    // 追加
    router.post('/task/add', async (req, res) => {
        return await TaskController.add(req, res)
    })

    // 更新
    router.put('/task/update/:id', async (req, res) => {
        return await TaskController.update(req, res)
    })

    // 削除
    router.delete('/task/remove/:id', async (req, res) => {
        return await TaskController.remove(req, res)
    })

    return router
}
