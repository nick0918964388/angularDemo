import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// import { BehaviorSubject } from "rxjs/Rx";
import { Observable } from 'rxjs';


// import { AesEncrypt, AesDecrypt } from '../../../utility/EncryptHelper';
import { environment } from '../../../environments/environment';
import encodeQueryData from '../../../utility/encodeQueryData';
import { ProcessingService } from './processing.service';
// import { PROCESSING_GLOBAL } from '../../../environments/constants';
import { randomRocessId } from '../../../utility/guid';

@Injectable()
export class AuthService {

  private headers: Headers = new Headers();
  redirectUrl: string;


}
