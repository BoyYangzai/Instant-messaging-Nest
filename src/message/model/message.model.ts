import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Message extends Model<Message> {
    @Column
    content: string;
    @Column
    userId: number;
    @Column
    username: string;
    @Column
    sender: string;
    @Column
    receiver: string;

}