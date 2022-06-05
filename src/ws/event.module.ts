import { Module } from "@nestjs/common";
import { EventsGateway } from "./envent.gateway";

@Module({
    providers: [EventsGateway]
})
export class EventsModule { }