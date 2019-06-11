import * as mongoose from 'mongoose';

export const Courseschema = new mongoose.Schema({
    courseName: String,
    courseCode: String,
});
