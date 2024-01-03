import { Request, Response } from 'express';
import Task from '../models/task'; // Taskモデルのインポートを想定
import { connectDatabase, closeDatabase } from '../frameworks/db/connect';

export const TaskController = {
    index: async (req: Request, res: Response) => {
        try {
            console.log('index start');
            // データベース接続
            await connectDatabase();
            const tasks = await Task.find();
            // データベース接続を閉じる
            await closeDatabase();
            console.log(tasks);
            res.status(200).send(tasks);
        } catch (err) {
            res.status(500).send(err); // エラーを適切な形でクライアントに返す
            console.error(err);
        }
    },

    add: async (req: Request, res: Response) => {

        // リクエストボディからタスク情報を取得
        const { title, description, status, deadline } = req.body;
        console.log(req.body);

        try {
            // タスクを作成
            const task = await Task.create({
                title,
                description,
                status,
                deadline
            });
            res.status(200).send(task);
        }catch (err) {
            res.status(500).send(err); // エラーを適切な形でクライアントに返す
            console.error(err);
        }
    }
};
