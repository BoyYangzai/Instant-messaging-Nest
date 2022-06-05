import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class hasAvatarDto {
    @IsNotEmpty()
    @ApiProperty({
        default: "yang",
        description: "创建用户姓名"
    })
    username: string;
}
