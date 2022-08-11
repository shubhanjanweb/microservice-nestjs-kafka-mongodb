import { Test, TestingModule } from '@nestjs/testing';
import { Observable } from 'rxjs';
import { SkillsService } from './skills.service';
import { getConfig } from '../../../app-config';


describe('SkillsService', () => {
  let service: SkillsService;
  let kafkaClient: any = {
    subscribeToResponseOf: jest.fn(),
    send: jest.fn()
  };

  beforeEach(async () => {
    service = new SkillsService(kafkaClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call subscribeToResponseOf', () => {
    service.onModuleInit();
    expect(kafkaClient.subscribeToResponseOf).toHaveBeenCalledWith(getConfig().getSkills.kafkaTopic);
  });

  it('should call send', done => {
    service.findAll();
    expect(kafkaClient.send).toHaveBeenCalledWith(getConfig().getSkills.kafkaTopic,
      'Send the list of skills');
    done();
  });

});
