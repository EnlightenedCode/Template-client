import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { templateApp } from './app.component';


@NgModule({
    declarations: [
        templateApp
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(templateApp, {
            preloadModules: true
        }, {
            links: [],
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        templateApp
    ]
})

export class AppModule  {

}
