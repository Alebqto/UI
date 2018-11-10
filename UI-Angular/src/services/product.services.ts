import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ClientUtilServices} from "./clientUtilServices";

@Injectable()
export class ProductServices{
	public url: string;
	public id: string;
	constructor(
		public _http: HttpClient, private clientUtilService : ClientUtilServices

		){}


	addRegister(newProduct){
		let params = JSON.stringify(newProduct);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');
		return this._http.post(this.clientUtilService.getHostURL()+"products?typeProduct.id="+newProduct.product_type_id+"&brand.id="+newProduct.brand_id+"&inventory.id=1&name="+newProduct.name+"&productQuantity="+newProduct.productQuantity+"&price="+newProduct.price, {headers: headers});

	}

    editProduct(editProduct){
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.clientUtilService.getHostURL()+"updateExistenceProduct/"+editProduct.id+"/"+editProduct.productQuantity  , {headers: headers});
    }


}