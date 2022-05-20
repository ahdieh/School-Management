import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: '1234',
      name: 'Physics',
      startDate: new Date().toISOString(),
      enddate: new Date().toISOString(),
    };
  }
}
