import dbOpen from './frameworks/db/connect'

// expressのインポート
import express, { Application, Request, Response } from 'express'

// expressのインスタンス作成
const app: Application = express()

// ポート番号
const port: number = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello nodemon!')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// MongoDBへの接続
// メソッドが失敗した場合、エラー情報をコンソールに出力する。
// dbOpen().catch(console.dir);
// console.dir：オブジェクトのプロパティ構造をツリー形式で表示するため、
// ネストされたオブジェクトの中身を視覚的に確認するのに役立ちます。
dbOpen().catch(console.dir)
