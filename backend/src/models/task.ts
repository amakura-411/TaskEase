import mongoose from 'mongoose'

// スキーマの定義

const taskSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    deadline: {
        type: Date,
        required: true
    }
})

export default mongoose.model('Task', taskSchema)
