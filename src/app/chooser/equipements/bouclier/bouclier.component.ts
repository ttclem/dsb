import {Component, OnInit} from '@angular/core'
import {StuffService} from '../../../shared/service/stuff.service'
import {Router} from '@angular/router'
import {StatistiquesService} from '../../../shared/service/statistiques.service'
import {PanoplieService} from '../../../shared/service/panoplie.service'
import {EquipementsComponent} from '../equipements.component'
import {Equipement} from '../../../shared/entities/Equipement'
import {EquipementsHttpService} from '../../../shared/httpService/equipements.http.service'
import {BOUCLIER} from '../../../shared/service/localstorage/localstore.constants'

@Component({
  selector: 'dsb-bouclier',
  templateUrl: '../equipements.component.html'
})
export class BouclierComponent extends EquipementsComponent implements OnInit {

  constructor(
    router: Router,
    stuffService: StuffService,
    statistiquesService: StatistiquesService,
    panoplieService: PanoplieService,
    equipementsHttpService: EquipementsHttpService
  ) {
    equipementsHttpService.type = 'boucliers'
    super(router, stuffService, statistiquesService, panoplieService, equipementsHttpService)
  }

  ngOnInit() {
    super.ngOnInit()
  }

  setItem(equipement: Equipement) {
    this.stuffService.updateBouclier(equipement)
    super.setItem(equipement)
  }
}
