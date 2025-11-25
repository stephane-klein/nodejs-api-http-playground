import { Module } from "@nestjs/common";
import { AppController } from "./users.controller.js";
import { UsersService } from "./users.service.js";

@Module({
    imports: [],
    controllers: [AppController],
    providers: [UsersService],
})
export class AppModule {}
