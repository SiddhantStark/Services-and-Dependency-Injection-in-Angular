import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  // constructor() { }
  log(message: string){
    const dateobj = new Date().toLocaleDateString();
    console.log(`${dateobj} : ${message}`)
  }
}
