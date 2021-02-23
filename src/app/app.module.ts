import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './@components/navbar/navbar.component';
import { FooterComponent } from './@components/footer/footer.component';
import { HomepageComponent } from './@views/homepage/homepage.component';
import { ProfileComponent } from './@views/profile/profile.component';
import { LoginComponent } from './@views/login/login.component';
import { PublicAssoComponent } from './@views/public-asso/public-asso.component';
import { AdminPartnerComponent } from './@views/admin-partner/admin-partner.component';
import { DashboardComponent } from './@views/dashboard/dashboard.component';
import { SignupComponent } from './@views/signup/signup.component';

const appRoutes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'asso/:id', component: PublicAssoComponent },
	{ path: 'admin', component: AdminPartnerComponent },
	{ path: 'dashboard', component: DashboardComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,

		HomepageComponent,
		ProfileComponent,
		LoginComponent,
		PublicAssoComponent,
		AdminPartnerComponent,
		DashboardComponent,
		SignupComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes),
		MDBBootstrapModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
