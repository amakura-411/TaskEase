import DatabaseOpen from './frameworks/db/connect'
import ServerStart  from './frameworks/web/server'


  // DB接続
    DatabaseOpen().catch(console.dir)

  // サーバー起動
    ServerStart().catch(console.dir)
