import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogueadoComponent } from './logueado/logueado.component';


const routes: Routes = [{path:'',component:LoginComponent},{path:'logueado/:id', component:LogueadoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
