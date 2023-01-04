import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomService } from './services/room.service';
import { AccomodationService } from './services/accomodation.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { PreporukeComponent } from './preporuke/preporuke.component';


const appRoute: Routes = [
  // {path:'Home', component: AppComponent, children: [
  //   {path:'preporuke', component: PreporukaComponent},
  //   {path:'accomodations', component: AccomodationsComponent},
  //   {path:'kontakt', component: KontaktComponent}
  // ]}
  {path:'accomodations', component: AccomodationsComponent},
  {path:'preporuke', component: PreporukeComponent}, 
  {path:'kontakt', component: KontaktComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    NavbarcomponentComponent,
    PreporukaComponent,
    KontaktComponent,
    AccomodationsComponent,
    PreporukeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [RoomService, AccomodationService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
