import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicioUsuarioComponent } from './pagina-inicio-usuario.component';

describe('PaginaInicioUsuarioComponent', () => {
  let component: PaginaInicioUsuarioComponent;
  let fixture: ComponentFixture<PaginaInicioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInicioUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInicioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
