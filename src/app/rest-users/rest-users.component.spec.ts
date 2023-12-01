import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESTUsersComponent } from './rest-users.component';

describe('RESTUsersComponent', () => {
  let component: RESTUsersComponent;
  let fixture: ComponentFixture<RESTUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RESTUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RESTUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
