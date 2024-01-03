import mongoose from 'mongoose';

// スキーマの定義

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    starus: {
        // 未着手、着手中、完了
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date
    },
    deadline: {
        type: Date,
        required: true
    }
});

export default mongoose.model('Task', taskSchema);
