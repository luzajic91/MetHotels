import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomService } from './services/room.service';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    NavbarcomponentComponent,
    PreporukaComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
