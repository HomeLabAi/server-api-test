import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from 'src/apis/dto/auth/login.dto';
import { RegisterDto } from 'src/apis/dto/auth/register.dto';
import { User, UserDocument } from 'src/apis/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async login(login: LoginDto) {
    return login;
  }

  async register(registerDto: RegisterDto) {
    return registerDto;
  }
}
