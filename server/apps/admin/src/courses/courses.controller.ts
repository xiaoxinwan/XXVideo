import { Crud } from 'nestjs-mongoose-crud';
import { Course } from './../../../../libs/db/src/models/course.model';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: Course,
})
@Controller('courses')
@ApiUseTags('课程')
export class CoursesController {
  constructor(
    @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>,
  ) {}
}
