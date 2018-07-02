import { Controller, Get } from '@nestjs/common'

@Controller('hello')
export class HelloController {
  
  @Get()
  findAll() {
    return 'Hi nest-js'
  }
}