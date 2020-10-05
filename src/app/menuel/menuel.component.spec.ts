import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuelComponent } from './menuel.component';

describe('MenuelComponent', () => {
  let component: MenuelComponent;
  let fixture: ComponentFixture<MenuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
