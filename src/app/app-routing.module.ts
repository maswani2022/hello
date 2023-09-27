import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  { path:'loans', pathMatch:'full', component:LoansComponent},
  
  {path:'reactive', component:ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
