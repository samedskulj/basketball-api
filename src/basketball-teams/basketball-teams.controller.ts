import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BasketballTeamsService } from './basketball-teams.service';
import { BasketBallTeams } from '@prisma/client';

@Controller('basketball-teams')
export class BasketballTeamsController {
  constructor(
    private readonly basketballTeamsService: BasketballTeamsService,
  ) {}

  @Post()
  create(@Body() createBasketballTeamDto: BasketBallTeams) {
    return this.basketballTeamsService.create(createBasketballTeamDto);
  }

  @Get()
  findAll() {
    return this.basketballTeamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketballTeamsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBasketballTeamDto: BasketBallTeams,
  ) {
    return this.basketballTeamsService.update(id, updateBasketballTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basketballTeamsService.remove(id);
  }
}
