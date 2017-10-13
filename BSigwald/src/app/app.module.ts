import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MdToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '@angular/material';
import {MdInputModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import {ScrollToModule} from 'ng2-scroll-to';
import {MdCardModule} from '@angular/material';
import { ParcoursComponent } from './parcours/parcours.component';
import {MdGridListModule} from '@angular/material';
import { CardComponent } from './card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CoherenceComponent } from './coherence/coherence.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ParcoursComponent,
    CardComponent,
    CoherenceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MdInputModule,
    ScrollToModule.forRoot(),
    MdCardModule,
    MdGridListModule,
    HttpClientModule,
     RouterModule.forRoot([
      {
        path: 'coherence',
        component: CoherenceComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
