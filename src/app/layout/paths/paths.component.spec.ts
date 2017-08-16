import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageHeaderModule } from './../../shared';
import { PathsComponent } from './paths.component';

describe('PathsComponent', () => {
  let component: PathsComponent;
  let fixture: ComponentFixture<PathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      PageHeaderModule,
    ],
      declarations: [ PathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
