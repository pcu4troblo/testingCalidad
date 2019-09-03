import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LogueadoComponent } from '../logueado/logueado.component';


fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent , LogueadoComponent],
      imports:[ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('form debe ser invalido si no se ingresa el correo ni la contraseña', () => {

    component.form.controls['email'].setValue('');
    component.form.controls['pass'].setValue('');

   
    expect(component.form.invalid).toBeTruthy();
  });

  it('form debe ser valido si se ingresa el correo y la contraseña', () => {

    component.form.controls['email'].setValue('Johan');
    component.form.controls['pass'].setValue('1234567');

   
    expect(component.form.valid).toBeTruthy();
  });

  it('las variables Email y Pass deben ser iguales a las credenciales ingresadas por el form respectivamente', () => {

    component.form.controls['email'].setValue('Johan');
    component.form.controls['pass'].setValue('1234567');

    let el = fixture.debugElement.query(By.css('a')).nativeElement
    el.click()
   
    expect(component.email).toEqual('Johan');
    expect(component.pass).toEqual('1234567');
  });


});
