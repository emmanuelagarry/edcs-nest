import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from 'src/models/courses.model';
import { CourseDto } from 'src/dto/course.dto';
import { CourseUpdateDto } from 'src/dto/courseUpdate.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly courses: CoursesService) { }

    @Get()
    getAll(): Promise<Course[]> {
        return this.courses.getAll();
    }

    @Post()
    postCourse(@Body() courseDto: CourseDto): Promise<Course> {
        return this.courses.createCourseItem(courseDto);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id): Promise<Course> {
        return this.courses.deleteCourse(id);
    }
    @Put()
    updateCourse(@Body() courseUpdateDto: CourseUpdateDto): Promise<Course> {
        console.log('running');
        return this.courses.updateCourse(courseUpdateDto);
    }
}
