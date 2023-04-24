import { TestBed } from '@angular/core/testing';

import { PluginServiceService } from './plugin-service.service';

describe('PluginServiceService', () => {
  let service: PluginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
