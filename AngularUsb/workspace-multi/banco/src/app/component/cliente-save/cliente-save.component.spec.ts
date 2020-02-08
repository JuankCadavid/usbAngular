import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSaveComponent } from './cliente-save.component';

describe('ClienteSaveComponent', () => {
  let component: ClienteSaveComponent;
  let fixture: ComponentFixture<ClienteSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
