import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesSidebar } from './favorites-sidebar';

describe('FavoritesSidebar', () => {
  let component: FavoritesSidebar;
  let fixture: ComponentFixture<FavoritesSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
