import { IsString } from "class-validator";

export class CreateTaskDTO {
    @IsString()
    task: string
}

export type UpdateTaskDTO = Partial<CreateTaskDTO>