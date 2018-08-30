import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { AppComponent } from './app.component';
import { Day4todoComponent } from './components/day4todo.component';
import { Day4tasklistComponent } from './components/day4tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    Day4todoComponent,
    Day4tasklistComponent
  ],
  imports: [
    BrowserModule, MaterialModule, BrowserAnimationsModule, 
    FormsModule, FlexLayoutModule, MatMomentDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
