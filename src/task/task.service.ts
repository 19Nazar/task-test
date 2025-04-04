import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDTO } from './task.dto';

@Injectable()
export class TaskService {
    constructor(private readonly db: PrismaService) {
    }


    async getTask(): Promise<Array<object>> {
        return await this.db.task.findMany();
        // return [{name: "Create app", termin: "2023-10-01", status: "done"}, {name: "Create app", termin: "2023-10-01", status: "done"}]; 
    }


    async createTask(dto: CreateTaskDTO): Promise<object> {
        const task = await this.db.task.create({
            data: dto,
        })
        return task;
    }
}
