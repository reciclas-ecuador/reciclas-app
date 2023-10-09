import { type EcoEquivalences } from '../src/collaborators/types/users'

export const ecoEquivalences = {
  totalRecycled: {
    value: 1, // kg
    unit: 'kg'
  },
  trees: {
    value: 0.006, // trees
    unit: 'trees'
  },
  water: {
    value: 39.26, // liters
    unit: 'ltrs'
  },
  energy: {
    value: 5, // kWh (kilowatt-hour)
    unit: 'kWh'
  },
  oil: {
    value: 1.9, // liters
    unit: 'ltrs'
  },
  co2: {
    value: 4.8, // kg
    unit: 'kg'
  },
  ligthsOn: {
    value: 210, // hours,
    unit: 'hrs'
  }
}

export const transformEcoEquivalences = (totalRecycled: number): EcoEquivalences => {
  // we are supposed totalRecycled is in kg
  return {
    totalRecycled: {
      name: 'Total Reciclado',
      value: Number((totalRecycled * ecoEquivalences.totalRecycled.value).toFixed(2)), // kg
      unit: ecoEquivalences.totalRecycled.unit
    },
    trees: {
      name: 'Árboles',
      value: Number((totalRecycled * ecoEquivalences.trees.value).toFixed(2)), // trees
      unit: ecoEquivalences.trees.unit
    },
    water: {
      name: 'Agua',
      value: Number((totalRecycled * ecoEquivalences.water.value).toFixed(2)), // liters
      unit: ecoEquivalences.water.unit
    },
    energy: {
      name: 'Energía',
      value: Number((totalRecycled * ecoEquivalences.energy.value).toFixed(2)), // kWh (kilowatt-hour)
      unit: ecoEquivalences.energy.unit
    },
    oil: {
      name: 'Petróleo',
      value: Number((totalRecycled * ecoEquivalences.oil.value).toFixed(2)), // liters
      unit: ecoEquivalences.oil.unit
    },
    co2: {
      name: 'Dióxido de Carbono',
      value: Number((totalRecycled * ecoEquivalences.co2.value).toFixed(2)), // kg
      unit: ecoEquivalences.co2.unit
    },
    ligthsOn: {
      name: 'Horas de Luz',
      value: Number((totalRecycled * ecoEquivalences.ligthsOn.value).toFixed(2)), // hours
      unit: ecoEquivalences.ligthsOn.unit
    }
  }
}
