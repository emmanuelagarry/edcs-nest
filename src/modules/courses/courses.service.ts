import { Injectable } from '@nestjs/common';
import { Course } from 'src/models/courses.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CourseUpdate } from 'src/models/courseUpdate.model';

@Injectable()
export class CoursesService {
    constructor(@InjectModel('Course') private readonly courseModel: Model<Course>) {
    }

    async getAll(): Promise<Course[]> {
        return await this.courseModel.find();
    }
    async createCourseItem(item: Course): Promise<Course> {
        const courseItem = new this.courseModel(item);
        return await courseItem.save();
    }
    async deleteCourse(id: string): Promise<Course> {
        return await this.courseModel.findByIdAndRemove(id);
    }
    async updateCourse(item: CourseUpdate): Promise<Course> {
        const answer = this.courseModel.findByIdAndUpdate(item._id, item);
        // console.log(item.courseName);
        return await answer;
    }
}
