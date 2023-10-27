import { TestBed } from '@angular/core/testing';

import { SettingsTerminalService } from './settings-terminal.service';

describe('SettingsTerminalService', () => {
  let service: SettingsTerminalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsTerminalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
