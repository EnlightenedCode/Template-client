import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TopHeaderLogoComponent } from './topHeaderLogo/topHeaderLogo.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginWorkflow } from '../providers/workflows/loginWorkflow';
import { FirebaseService } from '../providers/services/firebaseService';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [
        TopHeaderLogoComponent,
        LoginFormComponent,
        LoaderComponent
    ],
    declarations: [
        TopHeaderLogoComponent,
        LoginFormComponent,
        LoaderComponent
    ],
    providers: [FirebaseService, LoginWorkflow]
})

export class CommonComponentsModule { }
