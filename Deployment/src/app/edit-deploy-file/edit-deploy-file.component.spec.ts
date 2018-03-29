import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeployFileComponent } from './edit-deploy-file.component';

describe('EditDeployFileComponent', () => {
  let component: EditDeployFileComponent;
  let fixture: ComponentFixture<EditDeployFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeployFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeployFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
