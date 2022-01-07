import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  constructor(private http: HttpClient) { }
  apiURL : string = environment.apiURL+'/api/servicos-prestados';

  salvar(servicoPrestado:ServicoPrestado):Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(this.apiURL,servicoPrestado);
  }
}
