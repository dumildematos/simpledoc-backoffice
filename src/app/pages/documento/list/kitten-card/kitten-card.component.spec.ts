/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KittenCardComponent } from './kitten-card.component';

describe('KittenCardComponent', () => {
  let component: KittenCardComponent;
  let fixture: ComponentFixture<KittenCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
