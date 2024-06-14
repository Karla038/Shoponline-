import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { MessageService, ConfirmationService  } from 'primeng/api';
import { HomeComponent } from '../app/componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProductosComponent
    ],
    providers: [
        provideClientHydration(),
        AuthService,
        MessageService,
        ConfirmationService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PrimengModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule

    ]
})
export class AppModule { }
