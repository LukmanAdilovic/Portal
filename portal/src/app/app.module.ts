import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';


import { HttpClientModule } from '@angular/common/http';
import { AddEditArtComponent } from './home/add-edit-art/add-edit-art.component';
import { ShowArticleComponent } from './home/show-article/show-article.component';
import { SharedService } from './shared.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CoreModule } from './core/core.module';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    AddEditArtComponent,
    ShowArticleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:56436"],
        disallowedRoutes: []
      }
    }),
    CoreModule
  ],
  exports: [MatButtonModule],
  providers: [SharedService, LoginComponent, HomeComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
