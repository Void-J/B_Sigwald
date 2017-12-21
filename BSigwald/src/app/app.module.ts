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
import { MatGridListModule} from '@angular/material';
import { CardComponent } from './card/card.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CoherenceComponent } from './pages/coherence/coherence.component';
import { MatTabsModule} from '@angular/material';
import { MatMenuModule} from '@angular/material';

import 'hammerjs';
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { AppRoutingModule } from './/app-routing.module';
import { SophrologieComponent } from './pages/sophrologie/sophrologie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { ApplicationsComponent } from './pages/applications/applications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    CoherenceComponent,
    ParcoursComponent,
    SophrologieComponent,
    NavbarComponent,
    NavComponent,
    MainComponent,
    ApplicationsComponent,

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
    MatMenuModule,
    ScrollToModule.forRoot(),
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const appRoutes: Routes = [

  {
    path: 'cohe',
    redirectTo: '/cohe',
     pathMatch: 'full',
  }
];