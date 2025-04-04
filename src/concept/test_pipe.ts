import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class TestPipe implements PipeTransform<string, number>{
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = parseInt(value);
        if(isNaN((val))){
            throw new BadRequestException("Faled to validate input param");
        } else {
            return val;
        }
    }
}