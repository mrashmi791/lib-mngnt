import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Update } from '../models/employeelist.model';


@Injectable({
  providedIn: 'root'
 
})
export class ApiService {
  apiKey: string = '807a6652f80a9f653288d4de9e6766b4';
  
  constructor(private httpClient: HttpClient) {

   }

   getNews(apiUrl: string): Observable<any> {
     return this.httpClient.get(apiUrl);
   }

   updateEmployee(updateKey: string, updateEmp: Update): Observable<any> {
     return this.httpClient.put(updateKey, updateEmp);
   }

   deleteEmployee(deleteKey: string):Observable<any> {
    return this.httpClient.delete(deleteKey);
   }

   createEmployee(createKey: string,emp: Update):Observable<any> {
     return this.httpClient.post(createKey,emp);
   }


   getBookList(url:string): Observable<any> {
     return this.httpClient.get(url);
   }


   
   getResturantList(url: string): Observable<any> {
     return this.httpClient.get(url,{
       headers: {
         "user-key": this.apiKey,
       },
       params: {
         "lat": "20.2961",
         "lon": "85.8245"
       }
     });
   }
}
