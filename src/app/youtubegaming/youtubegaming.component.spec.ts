import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubegamingComponent } from './youtubegaming.component';

describe('YoutubegamingComponent', () => {
  let component: YoutubegamingComponent;
  let fixture: ComponentFixture<YoutubegamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubegamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubegamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
