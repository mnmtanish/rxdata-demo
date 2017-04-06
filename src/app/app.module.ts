import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Database } from 'rxdata';
import { AppComponent } from './app.component';
import { createDatabase } from './database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: Database, useFactory: createDatabase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
