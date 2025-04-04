import { Body, Controller, Get, ParseIntPipe, Post, Query, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { TestPipe } from 'src/concept/test_pipe';
import { TestInterceptor } from 'src/concept/test_intercapter';
import { CreateTaskDTO } from './task.dto';

@Controller('task')
@UseInterceptors(TestInterceptor)
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  async getTask(@Query('limit', TestPipe) limit: number): Promise<Array<object>> {
    console.log("limit", limit);
    return await this.taskService.getTask();
  }
  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: CreateTaskDTO): Promise<object> {
    return await this.taskService.createTask(dto);
  }
}
