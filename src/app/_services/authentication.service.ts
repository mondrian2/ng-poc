﻿﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public _user: any;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        
        return this.http.post<any>(`/api/autenticacao/login`, {
                "strategy": "local",
                "usuario": username,
                "senha": password
              
            })
            .pipe(map(u => {
                
                let user = u.conteudo
                
                this._user = {
                    codigo: user.codigo,
                    primeiroNome: user.primeiroNome
                };
                localStorage.setItem('currentUser', JSON.stringify(this._user));
                this.currentUserSubject.next(this._user);
                return this._user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
