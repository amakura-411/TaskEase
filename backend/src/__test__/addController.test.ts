import { mockReq, mockRes } from 'sinon-express-mock'

// テスト用のデータを作成する
const testTaskDate = {
    title: 'test task',
    description: 'test description',
    status: '未着手',
    deadline: Date.now()
}

interface Request {
    body: {
        title: string
        description: string
        status: string
        deadline: number
    }
}

// localhost:3000/task/add にPOSTリクエストを送る
describe('/backend/src/controllers/taskController.ts', () => {
    test('タスクを追加する', async () => {
        const request: Request = {
            body: {
                title: 'test task',
                description: 'test description',
                status: '未着手',
                deadline: Date.now()
            }
        }
        const req = mockReq(request)
        const res = mockRes()
        expect(res.status.calledWith(201)).toBeTruthy()
    })
})
