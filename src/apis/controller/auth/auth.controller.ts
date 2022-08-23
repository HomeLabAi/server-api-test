import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/apis/service/auth/auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LoginDto } from 'src/apis/dto/auth/login.dto';
import { RegisterDto } from 'src/apis/dto/auth/register.dto';
import { Auth } from 'src/core/decorators/auth.decorator';
import { ROLE } from 'src/core/constants/enum';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login' })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @ApiOperation({ summary: 'Login' })
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
