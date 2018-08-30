import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio'
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';


const MATERIAL = [MatButtonModule, MatIconModule, MatInputModule,MatDividerModule,
    MatToolbarModule, MatFormFieldModule, MatDatepickerModule, MatRadioModule, MatProgressSpinnerModule,MatCardModule];

@NgModule ({
    imports: MATERIAL,
    exports: MATERIAL
})

export class MaterialModule{}