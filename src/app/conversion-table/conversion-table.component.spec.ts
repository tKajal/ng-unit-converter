import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionTableComponent } from './conversion-table.component';

describe('ConversionTableComponent', () => {
  let component: ConversionTableComponent;
  let fixture: ComponentFixture<ConversionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversionTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
