import { Injectable } from '@nestjs/common';
import { Course } from './interface/course.interface';

@Injectable()
export class CoursesService {
  private readonly courses: Course[] = [
    {
      id: 1,
      name: 'Curso de Nest.js',
      description: 'Fundamentos de Nest.js',
      tags: ['JavaScript', 'Node.js', 'Nest.js', 'Express.js'],
    },
  ];

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: string): Course {
    return this.courses.find((course) => course.id === Number(id));
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
