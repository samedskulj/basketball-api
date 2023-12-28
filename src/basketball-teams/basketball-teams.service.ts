import { Injectable } from '@nestjs/common';
import { BasketBallTeams } from '@prisma/client';
import { PrismaService } from 'src/utils/prisma';

@Injectable()
export class BasketballTeamsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBasketballTeamDto: BasketBallTeams) {
    return this.prisma.basketBallTeams.create({
      data: createBasketballTeamDto,
    });
  }

  findAll() {
    return this.prisma.basketBallTeams.findMany();
  }

  findOne(id: string) {
    return this.prisma.basketBallTeams.findUnique({
      where: { id },
    });
  }

  update(id: string, updateBasketballTeamDto: BasketBallTeams) {
    return this.prisma.basketBallTeams.update({
      where: { id },
      data: updateBasketballTeamDto,
    });
  }

  remove(id: string) {
    return this.prisma.basketBallTeams.delete({
      where: { id },
    });
  }
}
