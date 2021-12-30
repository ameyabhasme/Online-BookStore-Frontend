import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './Components/Books/book-details/book-details.component';
import { OrderGreetingComponent } from './Components/Books/order-greeting/order-greeting.component';
import { OrdersComponent } from './Components/Cart/orders/orders.component';
import { WishlistComponent } from './Components/Cart/wishlist/wishlist.component';
import { DashboardComponent } from './Components/Common/dashboard/dashboard.component';
import { FooterComponent } from './Components/Common/footer/footer.component';
import { HeaderComponent } from './Components/Common/header/header.component';
import { ForgetPasswordComponent } from './Components/Users/forgot-password/forget-password.component';
import { LoginSignupRequestComponent } from './Components/Users/login-signup-request/login-signup-request.component';
import { LoginComponent } from './Components/Users/login/login.component';
import { ProfileComponent } from './Components/Users/profile/profile.component';
import { RegisterComponent } from './Components/Users/register/register.component';
import { ResetPasswordComponent } from './Components/Users/reset-password/reset-password.component';
// import { BookDetailsComponent } from './Components/Books/book-details/book-details.component';
import { GetAllBooksComponent } from './Components/Books/get-all-books/get-all-books.component';
import { MyCartComponent } from './Components/Books/my-cart/my-cart.component';
import { OrderSummaryComponent } from './Components/Cart/order-summary/order-summary.component';
import { CustomerDetailsComponent } from './Components/Cart/customer-details/customer-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'get-all-books', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotPassword', component: ForgetPasswordComponent },
  { path: 'resetPassword/:token', component: ResetPasswordComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login-signup-request', component: LoginSignupRequestComponent },
  { path: 'order-greeting', component: OrderGreetingComponent },
  { path: 'book-details', component: BookDetailsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'book-details/:bookId', component: BookDetailsComponent },
  { path: 'get-all-books', component: GetAllBooksComponent },
  { path: 'my-cart', component:MyCartComponent },
  { path: 'order-summary', component:OrderSummaryComponent},
  { path: 'my-cart', component: MyCartComponent },
  { path: 'customer-details', component: CustomerDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
