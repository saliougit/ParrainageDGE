import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurComponent } from './electeur.component';

describe('ElecteurComponent', () => {
  let component: ElecteurComponent;
  let fixture: ComponentFixture<ElecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElecteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
