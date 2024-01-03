import { Router } from "express";

export const TaskRouter = () => {

    const router = Router();

    // 一覧表示
    router.get('/', (req, res) => {
        res.status(200).send({message: '一覧表示のためのAPI'})
    })

    // 追加
    router.post('/', (req, res) => {
        res.status(200).send({message: '追加のためのAPI'})
    })

    // 更新
    router.put('/:id', (req, res) => {
        res.status(200).send({message: '更新のためのAPI'})
    })

    // 削除
    router.delete('/:id', (req, res) => {
        res.status(200).send({message: '削除のためのAPI'})
    })

    return router;

}
