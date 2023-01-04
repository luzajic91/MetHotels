import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { PreporukeComponent } from './preporuke/preporuke.component';

const routes: Routes = [
    {path:'preporuke', component: PreporukeComponent},
    {path:'accomodations', component: AccomodationsComponent},
    {path:'kontakt', component: KontaktComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
