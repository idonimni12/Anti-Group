import { TestBed, inject } from '@angular/core/testing';

import { DeployFileGeneratorService } from './deploy-file-generator.service';

describe('DeployFileGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeployFileGeneratorService]
    });
  });

  it('should be created', inject([DeployFileGeneratorService], (service: DeployFileGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
