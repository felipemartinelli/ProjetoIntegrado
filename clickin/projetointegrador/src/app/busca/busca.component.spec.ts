import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaComponent } from './busca.component';

describe('BuscaComponent', () => {
  let component: BuscaComponent;
  let fixture: ComponentFixture<BuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
