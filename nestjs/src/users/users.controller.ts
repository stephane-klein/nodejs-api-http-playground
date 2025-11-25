import { Controller, Get, Post, Put, Param, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { UsersService } from "./users.service.js";

import { CreateUserDto } from "./dto/create-user.dto.js";
import { UpdateUserDto } from "./dto/update-user.dto.js";

@Controller("users")
export class AppController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }
    @Get(":userId")
    findOne(
        @Param("userId") userId: string
    ) {
        console.log("userId", userId);
        return this.usersService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() createUserDto: CreateUserDto
    ) {
        console.log(createUserDto);
        return this.usersService.create(createUserDto);
    }

    @Put()
    update(
        @Param("userId") userId: string,
        @Body() updateUserDto: UpdateUserDto
    ) {
        console.log(updateUserDto);
        return this.usersService.update(userId, updateUserDto);
    }
}
