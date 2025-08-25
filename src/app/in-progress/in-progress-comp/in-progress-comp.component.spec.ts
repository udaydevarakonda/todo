import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressCompComponent } from './in-progress-comp.component';

describe('InProgressCompComponent', () => {
  let component: InProgressCompComponent;
  let fixture: ComponentFixture<InProgressCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InProgressCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProgressCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
