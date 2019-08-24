import {Injectable} from '@angular/core'
import {Panoplie} from '../entities/Panoplie'
import {Statistique} from '../entities/Statistique'

@Injectable()
export class PanoplieService {

  private _listPanoplie = []

  get listPanoplie(): Panoplie[] {
    return this._listPanoplie
  }

  set listPanoplie(value: Panoplie[]) {
    this._listPanoplie = value
  }

  getPanoplieBonus(listIdEquipement: number[]): Statistique[] {
    const stats: Statistique[] = []
    this.listPanoplie.map(panoplie => {
      const hasEquipementList = panoplie.equipementsId.map(s => listIdEquipement.includes(s))
      if (hasEquipementList.filter(it => it).length === 2) {
        stats.push(...panoplie.bonus[0].stats)
      }
      if (hasEquipementList.filter(it => it).length === 3) {
        stats.push(...panoplie.bonus[1].stats)
      }
    })
    return stats
  }
}
