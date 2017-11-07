import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FlexLayoutModule} from "@angular/flex-layout";
import { MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { ScrollToModule} from 'ng2-scroll-to';
import { MatCardModule} from '@angular/material';
import { ParcoursComponent } from './parcours/parcours.component';
import { MatGridListModule} from '@angular/material';
import { CardComponent } from './card/card.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CoherenceComponent } from './coherence/coherence.component';
import { MatTabsModule} from '@angular/material';
import { MatMenuModule} from '@angular/material';
import { CohérenceComponent } from './cohérence/cohérence.component';
import { SophrologieComponent } from './sophrologie/sophrologie.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ParcoursComponent,
    CardComponent,
    CoherenceComponent,
    CohérenceComponent,
    SophrologieComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    ScrollToModule.forRoot(),
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const appRoutes: Routes = [

  {
    path: 'coherence',
    redirectTo: '/coherence',
     pathMatch: 'full',
  }
];