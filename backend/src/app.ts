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

