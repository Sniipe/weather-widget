//Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; //allows you to run angular in a browser, it can be run on a mobile, desktop, etc...

//Components
import { AppComponent} from './app.component';

@NgModule({
    imports:[BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }