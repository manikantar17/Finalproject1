import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurecloudComponent } from './azurecloud.component';

describe('AzurecloudComponent', () => {
  let component: AzurecloudComponent;
  let fixture: ComponentFixture<AzurecloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AzurecloudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AzurecloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
