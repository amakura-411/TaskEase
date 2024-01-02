import { MongoClient, ServerApiVersion } from 'mongodb'

//プレースホルダーをアトラスの接続文字列に置き換える。
const uri = 'mongodb://database:27017'
//MongoClient に MongoClientOptions オブジェクトを指定して、 安定版 API のバージョンを設定します。

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

async function dbOpen() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect()

        // 成功した接続を確認するためにpingを送信する。
        await client.db('admin').command({ ping: 1 })
        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        )
    } finally {
        // 終了/エラー時にクライアントが終了するようにする。
        await client.close()
    }
}

export default dbOpen
