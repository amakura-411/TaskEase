import { connectDatabase } from './frameworks/db/connect'
import ServerStart from './frameworks/web/server'

// サーバー起動
ServerStart().catch(console.dir)
// データベース接続
connectDatabase().catch(console.dir)
