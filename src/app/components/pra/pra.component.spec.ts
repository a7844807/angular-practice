import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraComponent } from './pra.component';

describe('PraComponent', () => {
  let component: PraComponent;
  let fixture: ComponentFixture<PraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
