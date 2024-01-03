import  express from 'express';
import { TaskRouter } from './router';


async function  ServerStart () {
    const app = express();
    
    const port = 3000;
    
    app.use('/', TaskRouter())
    
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
}

export default ServerStart;