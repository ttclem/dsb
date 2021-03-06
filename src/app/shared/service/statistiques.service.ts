import {Injectable} from '@angular/core'
import {ArmeDeChasse, Statistique} from '../entities/Statistique'
import {CharacteristiqueService} from './characteristique.service'
import {mapperForStat} from './mapper/mapperForStats'
import {mapperForStatInStuff} from './mapper/mapperForStatsInStuff'
import {PanoplieCharacteristiqueService} from './panoplieCharacteristique.service'
import {mapperPanoplieForStatInStuff} from './mapper/mapperForPanoplieStatsInStuff'

@Injectable()
export class StatistiquesService {

  constructor(
    private characteritiqueService: CharacteristiqueService,
    private panoplieCharacteristiqueService: PanoplieCharacteristiqueService) {
  }

  extractor(stat) {
    // tslint:disable-next-line:forin
    for (const key in stat) {
      const occurrence = mapperForStat.filter(item => item.label === key)
      if (occurrence && occurrence[0] !== undefined) {
        return new occurrence[0].type(
          parseInt(stat[key]['from']),
          parseInt(stat[key]['to'] ? stat[key]['to'] : stat[key]['from'])
        )
      }
    }

    if (stat['Arme de chasse']) {
      return new ArmeDeChasse()
    }
  }

  setStatInStuff(stat: Statistique) {
    const occurrence = mapperForStatInStuff.filter(item => item.label === stat.label)
    if (occurrence.length > 0) {
      occurrence[0].type(this.characteritiqueService, stat.to)
    }
  }

  setPanoplieStatInStuff(stat: Statistique) {
    const occurrence = mapperPanoplieForStatInStuff.filter(item => item.label === stat.label)
    if (occurrence.length > 0) {
      occurrence[0].type(this.panoplieCharacteristiqueService, stat.to)
    }
  }

  unsetStatInStuff(stat: Statistique) {
    const occurrence = mapperForStatInStuff.filter(item => item.label === stat.label)
    if (occurrence.length > 0) {
      occurrence[0].type(this.characteritiqueService, - stat.to)
    }
  }
}
