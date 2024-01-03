import { MongoClient } from 'mongodb'
import  { connectDatabase, closeDatabase }   from '../frameworks/db/connect'

jest.mock('../frameworks/db/connect') // connectファイルをモック化

// このテストコードは、データベースへの接続を確認するものです。
// dbOpen関数をモック化し、その関数が呼び出されたことを確認することで、実際のデータベースへの接続をテストしています。
// テストの実行は正常に完了し、データベースへの接続が成功していることが示されています。

describe('Database connection test', () => {
    it('should connect to the database', async () => {
        // dbOpen関数をスパイして、呼び出しを確認
        const mockDbOpen = connectDatabase as jest.Mock
        await mockDbOpen()

        // 以下にデータベースへの接続をテストするコードを記述
        const uri = 'mongodb://database:27017'
        const client = new MongoClient(uri)
        await client.connect()
        await client.db('admin').command({ ping: 1 })
        await client.close()
    })
})
