import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'

import {AppComponent} from './app.component'
import {ArmesComponent} from './chooser/armes/armes.component'
import {BuilderComponent} from './builder/builder.component'
import {CommonModule} from '@angular/common'
import {StuffService} from './shared/stuff.service'
import {CharacteritiqueService} from './shared/characteritique.service';
import { EquipementsComponent } from './chooser/equipements/equipements.component'

@NgModule({
  declarations: [
    AppComponent,
    ArmesComponent,
    BuilderComponent,
    EquipementsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    StuffService,
    CharacteritiqueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
