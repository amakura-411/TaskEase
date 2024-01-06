import mongoose from 'mongoose'

// const uri = 'mongodb://database:27017';
const uri = 'mongodb://myuser:userpassword@database:27017/mydatabase'

// データベース接続を行う関数
export async function connectDatabase() {
    try {
        await mongoose.connect(uri)
        // console.log('Tasks:', tasks);
        console.log('MongoDB connected!')
    } catch (error) {
        console.error('MongoDB connection error:', error)
    }
}

// データベース接続を閉じる関数
export async function closeDatabase() {
    try {
        await mongoose.disconnect()
        console.log('MongoDB connection closed.')
    } catch (error) {
        console.error('Failed to close MongoDB connection:', error)
    }
}
