/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiglatinComponent } from './piglatin.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('PiglatinComponent', () => {
  let component: PiglatinComponent;
  let fixture: ComponentFixture<PiglatinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiglatinComponent ],
      imports:[FormsModule,BrowserModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiglatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
