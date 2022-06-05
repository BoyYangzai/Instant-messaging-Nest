import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WsResponse } from "@nestjs/websockets";
import { Socket } from "socket.io";
@WebSocketGateway(2999, {
    cors: {
        origin: '*',
    },
})

export class EventsGateway {
    @SubscribeMessage('events')
    chufashijian(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket,
    ): string {
        return data;
    }

    @SubscribeMessage('connection')
    t(
        @MessageBody() data: {
            username: string,
        },
        @ConnectedSocket() client: Socket,
    ): WsResponse<unknown> {
        client.emit('join', async (client) => {
            client.join(data.username);
        })
        return { event: 'join', data: '服务端推送到客户端' };
        //这里相当于服务端向客户端emit一个qaq事件
    }

    @SubscribeMessage('rtc')
    connection(
        @MessageBody() data: {
            id: string,
        },
        @ConnectedSocket() client: Socket,
    ): WsResponse<unknown> {
        return;
    }

    @SubscribeMessage('sendMessage')
    sendMessage(
        @MessageBody() data: {
            to: string,
        },
        @ConnectedSocket() client: Socket,
    ): WsResponse<unknown> {
        client.broadcast.emit('showMessage');
        client.emit('showMessage')
        return;
    }


}