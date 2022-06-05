import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class uploadAvatarDto {
    @IsNotEmpty()
    @ApiProperty({
        default: "yang",
        description: "创建用户姓名"
    })
    username: string;

    @IsNotEmpty()
    @ApiProperty({
        default: '2365539910'
    })
    avatar: string;
}
