import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreEstudioComponent } from './pre-estudio.component';

describe('PreEstudioComponent', () => {
  let component: PreEstudioComponent;
  let fixture: ComponentFixture<PreEstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreEstudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
