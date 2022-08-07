import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillsService } from './skills.service';

@Controller('admin/skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) { }

  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

}
