import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './create-student-input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { name, lastname } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      name,
      lastname,
    });
    return this.studentRepository.save(student);
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
}
