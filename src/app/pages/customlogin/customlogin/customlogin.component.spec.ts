import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomloginComponent } from './customlogin.component';

describe('CustomloginComponent', () => {
  let component: CustomloginComponent;
  let fixture: ComponentFixture<CustomloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
