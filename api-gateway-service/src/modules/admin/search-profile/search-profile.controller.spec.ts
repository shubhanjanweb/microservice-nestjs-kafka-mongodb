import { SearchProfileController } from './search-profile.controller';

describe('SearchProfileController', () => {
  let controller: SearchProfileController;
  let service: any;

  beforeEach(async () => {
    service = {
      findAll: jest.fn()
    }
    controller = new SearchProfileController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
