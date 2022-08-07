import { Module } from '@nestjs/common';
import { SearchProfileModule } from './search-profile/search-profile.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [SearchProfileModule, SkillsModule]
})
export class AdminModule {}
