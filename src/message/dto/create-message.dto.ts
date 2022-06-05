import { ApiProperty } from "@nestjs/swagger";

export class CreateMessageDto {
    @ApiProperty({
        default: 'Hello',
        description: '消息内容',
        example: 'Hello',
        required: true,
    })
    content: string;
    @ApiProperty({
        default: 'yang',
        description: '消息发送者',
        example: 'yang',
        required: true,
    })
    sender: string;

    @ApiProperty({
        default: 'xiaoxin',
        description: '消息接收者',
        example: 'xiaoxin',
        required: true,
    })
    receiver: string;
}
