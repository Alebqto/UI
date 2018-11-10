import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './routes/routes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DataTableModule} from 'primeng/datatable';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {MenuItem,ConfirmationService} from 'primeng/api';                 //api
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ODataConfiguration, ODataServiceFactory, ODataService } from 'angular-odata-es5';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { LoginComponent } from './login/login.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import {LoginService} from "../services/login.services";
import {FileUploadModule} from 'primeng/fileupload';
import { APP_CONFIG, APP_DI_CONFIG } from "./app-config/app-config.constants";
import {ClientUtilServices} from "../services/clientUtilServices";
import {ProductServices} from "../services/product.services";
import { ProductComponent } from './product/product.component';
import {SpinnerModule} from 'primeng/spinner';
@NgModule({
  declarations: [
    AppComponent,
      ProductComponent,
      LoginComponent
    

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
      ButtonModule,
      TableModule,
      RadioButtonModule,
      InputTextModule,
      FormsModule,
      ConfirmDialogModule,
      BrowserAnimationsModule,
      DataTableModule,
      routing,
      MessagesModule,
      MessageModule,
      MegaMenuModule,
      DialogModule,
      HttpModule,
      DropdownModule,
      FileUploadModule,
      SpinnerModule

  ],
  providers: [ConfirmationService,  LoginService, ClientUtilServices, ProductServices
      ,{
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
      }
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
