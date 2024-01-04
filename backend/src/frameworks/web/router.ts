import { Router } from "express";
import  { TaskController }  from "../../controllers/taskController";

export const TaskRouter = () => {

    const router = Router();
    // 一覧表示
    router.get('/task', async (req, res) => {
        return await TaskController.index(req, res)
    })

    // 追加
    router.post('/task/add',  async (req, res) => {
        res.status(200).send({message: '追加のためのAPI'})
    })

    // 更新
    router.put('/task/:id', async (req, res) => {
        res.status(200).send({message: '更新のためのAPI'})
    })

    // 削除
    router.delete('/task/:id', async (req, res) => {
        res.status(200).send({message: '削除のためのAPI'})
    })

    return router;

}
