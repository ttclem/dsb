import {Component, OnInit} from '@angular/core'
import {StuffService} from '../shared/stuff.service'
import {CharacteritiqueService} from '../shared/characteritique.service'

@Component({
  selector: 'builder',
  templateUrl: './builder.component.html',
  styles: []
})
export class BuilderComponent implements OnInit {

  arme: string
  amulette: string
  anneau1: string
  anneau2: string
  ceinture: string
  cape: string
  coiffe: string
  bottes: string
  familier: string
  monture: string
  bouclier: string

  force: number
  intelligence: number
  chance: number
  agilite: number
  vitalite: number

  constructor(
    private stuffService: StuffService,
    private characteritiqueService: CharacteritiqueService) {
  }

  ngOnInit() {
    this.arme = this.stuffService.arme
    this.amulette = this.stuffService.amulette
    this.anneau1 = this.stuffService.anneau1
    this.anneau2 = this.stuffService.anneau2
    this.ceinture = this.stuffService.ceinture
    this.cape = this.stuffService.cape
    this.coiffe = this.stuffService.coiffe
    this.bottes = this.stuffService.bottes
    this.familier = this.stuffService.familier
    this.monture = this.stuffService.monture
    this.bouclier = this.stuffService.bouclier

    this.force = this.characteritiqueService.force
    this.intelligence = this.characteritiqueService.intelligence
    this.chance = this.characteritiqueService.chance
    this.agilite = this.characteritiqueService.agilite
    this.vitalite = this.characteritiqueService.vitalite
  }
}
