import {Component, OnInit} from '@angular/core'
import {BottesHttpService} from './bottes.http.service'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements/equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'

@Component({
  selector: 'dsb-bottes',
  templateUrl: '../equipements/equipements.component.html',
  providers: [
    BottesHttpService
  ]
})
export class BottesComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    private bottesHttpService: BottesHttpService,
  ) {
    super(router, stuffService, statistiquesService, panoplieService)
  }

  ngOnInit() {
    this.bottesHttpService.getAllEquipements().then(response => {
      this.equipements = response
    })
  }

  setBuild(equipement: Equipement) {
    this.stuffService.bottes = equipement.imgUrl
    super.setBuild(equipement)
  }
}
