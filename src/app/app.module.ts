import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from "@angular/material/core";
import { MatDividerModule } from '@angular/material/divider';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import { MatExpansionPanelModule, MatExpansionPanelHeaderModule, MatExpansionPanelTitleModule, MatAccordionModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './Components/Books/book-details/book-details.component';
import { GetAllBooksComponent } from './Components/Books/get-all-books/get-all-books.component';
import { MyCartComponent } from './Components/Books/my-cart/my-cart.component';
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
import { OrderSummaryComponent } from './Components/Cart/order-summary/order-summary.component';
import { CustomerDetailsComponent } from './Components/Cart/customer-details/customer-details.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginSignupRequestComponent,
    OrderGreetingComponent,
    BookDetailsComponent,
    WishlistComponent,
    OrdersComponent,
    BookDetailsComponent,
    ProfileComponent,
    BookDetailsComponent,
    GetAllBooksComponent,
    MyCartComponent,
    OrderSummaryComponent,
    CustomerDetailsComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDividerModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
