import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@iiht/shared';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: any;
  let component: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Skill Tracker Application'`, () => {
    expect(component.title).toEqual('Skill Tracker Application');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('header nav .logo')?.textContent).toContain('Skill Tracker Application');
  });

  it(`should have 'Admin Panel' link`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#navbarNav .nav-link')?.textContent).toContain('Admin Panel');
  });
});
