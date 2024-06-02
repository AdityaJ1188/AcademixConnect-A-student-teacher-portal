import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateResComponent } from './student-update-res.component';

describe('StudentUpdateResComponent', () => {
  let component: StudentUpdateResComponent;
  let fixture: ComponentFixture<StudentUpdateResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentUpdateResComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentUpdateResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
