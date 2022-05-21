import { Field, ID, ObjectType } from '@nestjs/graphql';

// to let graphql to know this type, we decorate this with the decoratpr: @ObjectType
// renaming LessonType to Lesson
@ObjectType('Lesson')
export class LessonType {
  // to let graphql to know this type, we decorate this with the decoratpr: @ObjectType
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  startDate: string;
  @Field()
  endDate: string;
}
