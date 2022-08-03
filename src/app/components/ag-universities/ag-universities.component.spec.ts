import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgUniversitiesComponent } from './ag-universities.component';

describe('AgUniversitiesComponent', () => {
  let component: AgUniversitiesComponent;
  let fixture: ComponentFixture<AgUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgUniversitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
