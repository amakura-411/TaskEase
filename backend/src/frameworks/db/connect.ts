import mongoose from "mongoose";

// const uri = 'mongodb://database:27017';
const uri = 'mongodb://myuser:userpassword@database:27017/mydatabase';

// データベース接続を行う関数
export async function connectDatabase() {
    try {
        await mongoose.connect(uri);
        // コレクション一覧を表示
        const collections = await mongoose.connection.db.collections();
        console.log('Collections:', collections.map((collection) => collection.collectionName));
        // usersの全てを表示
        // tasksにアクセスできるか確認  
        const ok = await mongoose.connection.db.collection('tasks');
        console.log('ok:', ok);
        const tasks = await mongoose.connection.db.collection('tasks').find({}).toArray();
        console.log('Tasks:', tasks);
        console.log('MongoDB connected!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

// データベース接続を閉じる関数
export async function closeDatabase() {
    try {
        await mongoose.disconnect();
        console.log('MongoDB connection closed.');
    } catch (error) {
        console.error('Failed to close MongoDB connection:', error);
    }
}
