import { Module } from '@nestjs/common';
import { BasketballTeamsService } from './basketball-teams.service';
import { BasketballTeamsController } from './basketball-teams.controller';
import { PrismaService } from 'src/utils/prisma';

@Module({
  controllers: [BasketballTeamsController],
  providers: [BasketballTeamsService, PrismaService],
})
export class BasketballTeamsModule {}
