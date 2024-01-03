import  express from 'express';
import { TaskRouter } from './router';


async function  ServerStart () {
    const app = express();
    
    const port = 3000;
    
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    app.use('/', TaskRouter())
    // 受け取るための処理
    
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
}

export default ServerStart;