import { Module } from '@nestjs/common'
import {HelloController} from './app.controllers'
import { AppService } from './app.service'

@Module({
  modules: [],
  controllers: [HelloController],
  providers: [AppService]
})

export class ApplicationModule {}