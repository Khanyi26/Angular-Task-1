import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutesModule } from "./app/app-routing.module";
import { AppComponent } from "./app/app.component";
//import { HomeComponent } from "./app/components/home/home.component";
//import { AboutComponent } from "./app/components/about/about.component";
//import { PortfolioComponent } from "./app/components/portfolio/portfolio.component";
//import { ContactComponent } from "./app/components/contact/contact.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactComponent } from "./app/components/contact/contact.component";


 @NgModule ({
    declarations: [   
        ContactComponent

       
    ],

    imports: [
        BrowserModule,
        ReactiveFormsModule
        //AppRoutingModule
    ],

    providers: [],

    bootstrap: []
      
 })

 export class AppModule {}
 
