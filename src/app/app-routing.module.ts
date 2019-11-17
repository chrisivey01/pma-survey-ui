import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './components/survey/survey.component';
import { LoginComponent } from './components/login/login.component';
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
  {path: '', component: SurveyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'items', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
