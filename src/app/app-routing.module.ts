import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './shared/auth.guard';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },

  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
  },
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },

  { path: '', pathMatch: 'full', redirectTo: 'main-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
