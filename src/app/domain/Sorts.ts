export class Sorts {
  label: string
  image: string
  type: string
  normal: number[]
  critique: number[]

  constructor(label: string, image: string, type: string,  normal: number[], critique: number[]) {
    this.label = label
    this.image = image
    this.type = type
    this.normal = normal
    this.critique = critique
  }

  static calcul(
    degatDeBase: number,
    puissance: number,
    caracteristiques,
    dommages: number,
    dommagesElemFixe: number,
    dommagesCritique: number = 0,
    ...dommagesPourcentEnPlus
  ) {
    let baseDommage = degatDeBase + degatDeBase * ((puissance + caracteristiques) / 100) + (dommages + dommagesElemFixe + dommagesCritique)
    if (dommagesPourcentEnPlus.length !== 0) {
      let toto = 0
      dommagesPourcentEnPlus.map(item => toto += item)
      baseDommage = baseDommage + baseDommage * (toto / 100)
    }
    return Math.round(baseDommage)
  }
}