import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResViewComponent } from './student-res-view.component';

describe('StudentResViewComponent', () => {
  let component: StudentResViewComponent;
  let fixture: ComponentFixture<StudentResViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentResViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentResViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
