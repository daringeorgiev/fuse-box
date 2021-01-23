import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { FuseBoxListComponent } from './fuse-box-list.component';


describe('FuseBoxListComponent', () => {
  let component: FuseBoxListComponent;
  let fixture: ComponentFixture<FuseBoxListComponent>;

  class StoreMock<T = object> extends Observable<T> {
    select = jasmine.createSpy().and.returnValue(of({}));
    dispatch = jasmine.createSpy();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuseBoxListComponent],
      providers: [
        FuseBoxListComponent,
        { provide: Store, useClass: StoreMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
