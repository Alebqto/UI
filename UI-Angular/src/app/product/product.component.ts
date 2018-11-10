import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import {ConfirmationService} from 'primeng/api';

import * as $ from 'jquery';
import {forEach} from "@angular/router/src/utils/collection";
import {ClientUtilServices} from "../../services/clientUtilServices";
import {ProductServices} from "../../services/product.services";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

    private dataProducts:  any = [];
    private cols: any =[];
    private displayModal = false;
    private displayModalEdit = false;
    private newProduct: any = {};
    private editProduct: any = {};
    private brands: any = {};
    private types: any = {};
    private selectedType: any = {};
    private selectedBrand: any = {} ;
    public messages = [];
  constructor( private http: HttpClient, private clientUtilService : ClientUtilServices, private productService : ProductServices) { }

    ngOnInit(): void {
        this.cols = [
            { field: 'id', header: 'ID' },
            {field: 'name', header: 'Description' },
            {field: 'typeProduct', header: 'Type' },
            {field: 'brand', header: 'Brand' },
            { field: 'price', header: 'Price' },
            { field: 'productQuantity', header: 'Existence' }
        ];
        this.types = [
            {name: 'vaso', id: 1},
            {name: 'camiseta', id: 2},
            {name: 'comic', id: 3},
            {name: 'juguete', id: 4},
            {name: 'accesorio', id: 5}
        ];
        this.brands = [
            {name: 'Marvel', id: 1},
            {name: 'DC comics', id: 2},
            {name: 'Alternativo de la comunidad', id: 3}
        ];

        this.getData();
    }

    private getData() {
        this.http.get(this.clientUtilService.getHostURL()+"products").subscribe((result) => {
         var arrayProducts :any= [];
            for (var key in result) {
                var product : any ={};
                product = result[key];
                let properties = {
                    id: product.id,
                    name: product.name,
                    typeProduct: product.typeProduct.name,
                    brand: product.brand.name,
                    price: product.price,
                    productQuantity : product.productQuantity
                };
                arrayProducts.push(properties);
            }
           this.dataProducts = arrayProducts;
        },
            error => console.log('Error', error));
    }

    addProduct(){
        this.displayModal = true;
    }

    saveProdcut(){
      console.log(this.selectedBrand.id);
      if(this.newProduct.name == "" || this.newProduct.name == undefined){
          this.messages = [];
          this.messages.push({severity:'error', summary:'Error', detail:'name empty'});
          return ;
      }
        if(this.newProduct.price == "" || this.newProduct.price == undefined){
            this.messages = [];
            this.messages.push({severity:'error', summary:'Error', detail:'price empty'});
            return ;
        }
        if(this.selectedType.id == "" || this.selectedType.id == undefined){
            this.messages = [];
            this.messages.push({severity:'error', summary:'Error', detail:'product type empty'});
            return ;
        }
        if(this.selectedBrand.id == "" || this.selectedBrand.id == undefined){
            this.messages = [];
            this.messages.push({severity:'error', summary:'Error', detail:'brand  empty'});
            return ;
        }
        if(this.newProduct.productQuantity == "" || this.newProduct.productQuantity == undefined){
            this.messages = [];
            this.messages.push({severity:'error', summary:'Error', detail:'existence  empty'});
            return ;
        }

        this.newProduct.product_type_id = this.selectedType.id;
        this.newProduct.brand_id = this.selectedBrand.id;
        this.newProduct.inventory_id = 1;
            this.productService.addRegister(this.newProduct).subscribe(
                result => {
                    this.messages = [];
                    this.messages.push({severity:'success', summary:'Info', detail:'Record saved successfully'});
                    this.displayModal = false;
                    this.getData();
                },
                error =>{
                    console.log(<any>error);
                });


    }

    cancelarSave(){
        this.displayModal=false;
    }

    cancelarEdit(){
        this.displayModalEdit=false;
    }

    EditProduct(data){
        this.displayModalEdit = true;
        this.editProduct=data;
    }

    saveEdit(){
        this.productService.editProduct(this.editProduct).subscribe(
            result => {
                this.messages = [];
                this.messages.push({severity:'success', summary:'Info', detail:'Record saved successfully'});
                this.displayModalEdit = false;
                this.getData();
            },
            error =>{
                console.log(<any>error);
            });
    }
}
