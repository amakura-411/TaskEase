import express from 'express'
import { TaskRouter } from './router'
import cors from 'cors'

async function ServerStart() {
    const app = express()

    const port = 3000

    app.use(
        cors({
            origin: 'http://localhost:8080', //アクセス許可するオリジン
            credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
            optionsSuccessStatus: 200 //レスポンスstatusを200に設定
        })
    )

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use('/', TaskRouter())
    console.log('cors')
    // app.use(cors());

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
}

export default ServerStart
