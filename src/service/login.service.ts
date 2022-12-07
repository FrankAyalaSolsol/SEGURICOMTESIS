import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cuenta } from 'src/models/cuenta';
@Injectable({
 providedIn:'root'
})
export class loginService{
    url = 'http://localhost:4000/api/usuarios/';
    constructor(private http: HttpClient)
    {
        
    }
    guardarProducto(usuario:Cuenta):Observable<any>{
        return this.http.post(this.url, usuario);
    }
}
