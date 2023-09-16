import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProjectComponent } from './header-project.component';

describe('HeaderProjectComponent', () => {
  let component: HeaderProjectComponent;
  let fixture: ComponentFixture<HeaderProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderProjectComponent]
    });
    fixture = TestBed.createComponent(HeaderProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
