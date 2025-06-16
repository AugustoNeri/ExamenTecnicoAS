import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datacomponent } from './datacomponent';

describe('Datacomponent', () => {
  let component: Datacomponent;
  let fixture: ComponentFixture<Datacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datacomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datacomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
