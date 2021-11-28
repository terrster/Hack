import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpsComponent } from './components/helps/helps.component';
import { HomeComponent } from './components/home/home.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'ayuda/:name', component: PageComponent},
  {path: 'help', component: HelpsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
