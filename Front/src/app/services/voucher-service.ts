import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { AppSettings } from './app-settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class VoucherService {
  apiUrl = 'https://waterapp-server.mybluemix.net/';
  constructor(public http: Http, public appSettings: AppSettings) {
  }
 public getVouchers() {
    return this.http.get('https://waterapp-server.mybluemix.net/api/voucher/get')
      .pipe(map(response => response.json().result));
  }
  public addVoucher(newVoucher) {
    return this.http.post(this.apiUrl + 'voucher/post', {companyID: newVoucher.companyID,
        voucherID: newVoucher.voucherID,
        title: newVoucher.title,
        offer: newVoucher.offer,
        price: newVoucher.price,
        promocode: newVoucher.promocode,
        status: newVoucher.status,
        color: newVoucher.color})
      .pipe(map(response => response.json()));
  }
  public deleteVoucher(VoucherId) {
    return this.http.delete('https://waterapp-server.mybluemix.net/api/voucher/delete/' + VoucherId)
      .pipe(map(response => response.json()));
  }
}
