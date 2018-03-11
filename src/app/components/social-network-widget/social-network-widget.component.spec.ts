import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkWidgetComponent } from './social-network-widget.component';

describe('SocialNetworkWidgetComponent', () => {
  let component: SocialNetworkWidgetComponent;
  let fixture: ComponentFixture<SocialNetworkWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
