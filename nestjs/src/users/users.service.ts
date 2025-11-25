import { Injectable } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {
    findAll(): User[] {
        return [
            {
                firstname: "John",
                lastname: "Doe"
            },
            {
                firstname: "Alice",
                lastname: "Doe"
            }
        ]
    }

    findOne(id: string): User {
        console.log(id);
        return {
            firstname: "Alice",
            lastname: "Doe"
        }
    }

    create(createUserDto: CreateUserDto): User {
        console.log(createUserDto);
        return createUserDto;
    }

    update(id: string, updateUserDto: UpdateUserDto): User {
        console.log(id);
        console.log(updateUserDto);
        return updateUserDto;
    }
}
