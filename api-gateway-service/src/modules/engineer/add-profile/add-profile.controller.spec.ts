import { AddProfileController } from './add-profile.controller';

describe('AddProfileController', () => {
  let controller: AddProfileController;
  let service: any;

  beforeEach(async () => {
    service = {
      findAll: jest.fn()
    }
    controller = new AddProfileController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
