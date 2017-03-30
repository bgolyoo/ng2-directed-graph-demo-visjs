import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { VisModule } from 'ng2-vis';
import { VisNetworkExampleComponent } from './network-example.component';
import { VisNetworkExampleComponent2 } from './network-example2.component';

@NgModule({
    declarations: [
        AppComponent,
        VisNetworkExampleComponent,
        VisNetworkExampleComponent2
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        VisModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
