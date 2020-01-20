import {inject, TestBed} from '@angular/core/testing'

import {FirebaseHttpService} from './firebase.http.service'

describe('FirebaseHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseHttpService]
    });
  });

  it('should be created', inject([FirebaseHttpService], (service: FirebaseHttpService) => {
    expect(service).toBeTruthy();
  }));
});
