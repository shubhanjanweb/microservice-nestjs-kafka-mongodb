import { Controller, Get, Query } from '@nestjs/common';
import { SearchProfileService } from './search-profile.service';

@Controller('admin/profiles')
export class SearchProfileController {
  constructor(private readonly searchProfileService: SearchProfileService) { }

  @Get()
  findAll(@Query() query) {
    console.log('query', query);
    return this.searchProfileService.findAll(query);
  }
}
