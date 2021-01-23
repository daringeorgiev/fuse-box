import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseBoxComponent } from './fuse-box.component';

describe('FuseBoxComponent', () => {
  let component: FuseBoxComponent;
  let fixture: ComponentFixture<FuseBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuseBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
