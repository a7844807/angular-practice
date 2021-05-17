import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPraComponent } from './material-pra.component';

describe('MaterialPraComponent', () => {
  let component: MaterialPraComponent;
  let fixture: ComponentFixture<MaterialPraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialPraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
