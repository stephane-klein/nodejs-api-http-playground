import { Controller, Get, Post, Put, Param } from "@nestjs/common";
import { AppService } from "./app.service.js";

@Controller("users")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    findAll(): string {
        return this.appService.getHello();
    }
    @Get(":userId")
    findOne(@Param("userId") userId: string): string {
        console.log("userId", userId);
        return this.appService.getHello();
    }

    @Post()
    create(): string {
        return this.appService.getHello();
    }

    @Put()
    update(): string {
        return this.appService.getHello();
    }
}
