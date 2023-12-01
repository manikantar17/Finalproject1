import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetcoreComponent } from './dotnetcore.component';

describe('DotnetcoreComponent', () => {
  let component: DotnetcoreComponent;
  let fixture: ComponentFixture<DotnetcoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DotnetcoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DotnetcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
