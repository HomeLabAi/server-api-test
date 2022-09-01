import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  @ApiOperation({ summary: 'Login' })
  @Get('login')
  async login() {
    return 'hello';
  }
}
