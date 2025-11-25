import { Controller, Get, Post, Put, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AppService } from "./app.service.js";

import { CreateUserDto } from "./dto/create-user.dto.js";
import { UpdateUserDto } from "./dto/update-user.dto.js";

@Controller("users")
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    findAll(): string {
        return this.appService.getHello();
    }
    @Get(":userId")
    findOne(
        @Param("userId") userId: string
    ): string {
        console.log("userId", userId);
        return this.appService.getHello();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() createUserDto: CreateUserDto
    ): string {
        console.log(createUserDto);
        return this.appService.getHello();
    }

    @Put()
    update(
        @Param("userId") userId: string,
        @Body() updateUserDto: UpdateUserDto
    ): string {
        console.log(updateUserDto);
        return this.appService.getHello();
    }
}
