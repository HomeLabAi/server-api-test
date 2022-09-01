import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/apis/services/auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LoginDto } from 'src/apis/dto/auth/login.dto';
import { RegisterDto } from 'src/apis/dto/auth/register.dto';
import { User } from 'src/apis/schemas/user.schema';
import { IResponse } from 'src/core/interfaces/IResponse';
import { responseError, responseSuccessWithData } from './base.controller';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login' })
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<IResponse<any>> {
    try {
      const data = await this.authService.login(loginDto);
      return responseSuccessWithData(data);
    } catch (error) {
      console.log(error);
      return responseError(error.message);
    }
  }

  @ApiOperation({ summary: 'Login' })
  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<IResponse<any>> {
    try {
      const data = await this.authService.register(registerDto);
      return responseSuccessWithData(data);
    } catch (error) {
      console.log(error);
      return responseError(error.message);
    }
  }
}
