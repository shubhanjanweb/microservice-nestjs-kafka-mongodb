import { Test, TestingModule } from '@nestjs/testing';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';

describe('SkillsController', () => {
  let controller: SkillsController;
  let skillService: any;

  beforeEach(async () => {
    skillService = {
      findAll: jest.fn()
    }
    controller = new SkillsController(skillService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
