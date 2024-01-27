import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/modules/home/home.module').then((m) => m.HomeModule),
    component: HomePageComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
