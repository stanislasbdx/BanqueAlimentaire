import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class ApiService {
	redirectUrl: string;
	baseUrl: string = "http://localhost/BanqueAlimentaire/php";

	@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
	
	constructor(private httpClient: HttpClient) { }
	
	public userLogin(username, password) {
		alert(username)
		return this.httpClient.post <any> (this.baseUrl + '/login.php', {
				username,
				password
			})
			.pipe(map(Users => {
				this.setToken(Users[0].name);
				this.getLoggedInName.emit(true);

				delete Users[0].password;
				localStorage.setItem('user', JSON.stringify(Users[0]));

				return Users;
			}));
	}


	public userRegistration(name, email, pwd) {
		return this.httpClient.post <any> (this.baseUrl + '/register.php', {
				name,
				email,
				pwd
			})
			.pipe(map(Users => {
				console.log(Users)
				return Users;
			}));
	}

	getUser() {
		return JSON.parse(localStorage.getItem('user'));
	}

	//token
	setToken(token: string) {
		localStorage.setItem('token', token);
	}
	getToken() {
		return localStorage.getItem('token');
	}
	deleteToken() {
		localStorage.removeItem('token');
	}
	isLoggedIn() {
		const usertoken = this.getToken();
		if (usertoken != null) {
			return true
		}
		return false;
	}
}