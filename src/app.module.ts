import { Module } from '@nestjs/common';
import { BasketballTeamsModule } from './basketball-teams/basketball-teams.module';

@Module({
  imports: [BasketballTeamsModule],
})
export class AppModule {}
