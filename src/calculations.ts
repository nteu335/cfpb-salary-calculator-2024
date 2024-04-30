/* eslint-disable unicorn/numeric-separators-style */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

import formatUSD from 'format-usd'

interface Cap {
  [key: number]: number
}

interface BandMaxRate {
  2024: number
  2025: number
  2026: number
}

interface BandMax {
  [key: number]: BandMaxRate
}

interface LocalityRate {
  name: string
  2023: number
  2024: number
}

interface Locality {
  [key: string]: LocalityRate
}

const CAPS: Cap = {
  2024: 255000,
  2025: 255000,
  2026: 255000
}

const BAND_MAXES: BandMax = {
  30: {
    2024: 83489,
    2025: 83489 * 1.02,
    2026: 83489 * 1.02 * 1.02
  },
  31: {
    2024: 70920,
    2025: 70920 * 1.02,
    2026: 70920 * 1.02 * 1.02
  },
  32: {
    2024: 76949,
    2025: 76949 * 1.02,
    2026: 76949 * 1.02 * 1.02
  },
  33: {
    2024: 83489,
    2025: 83489 * 1.02,
    2026: 83489 * 1.02 * 1.02
  },
  40: {
    2024: 99082,
    2025: 102600 * 1.02,
    2026: 105011 * 1.02 * 1.02
  },
  41: {
    2024: 81972,
    2025: 81972 * 1.02,
    2026: 81972 * 1.02 * 1.02
  },
  42: {
    2024: 88940,
    2025: 88940 * 1.02,
    2026: 88940 * 1.02 * 1.02
  },
  43: {
    2024: 96500,
    2025: 96500 * 1.02,
    2026: 96500 * 1.02 * 1.02
  },
  51: {
    2024: 113903,
    2025: 113903 * 1.02,
    2026: 113903 * 1.02 * 1.02
  },
  52: {
    2024: 129280,
    2025: 129280 * 1.02,
    2026: 129280 * 1.02 * 1.02
  },
  53: {
    2024: 146732,
    2025: 146732 * 1.02,
    2026: 146732 * 1.02 * 1.02
  },
  60: {
    2024: 192061,
    2025: 192061 * 1.02,
    2026: 192061 * 1.02 * 1.02
  },
  61: {
    2024: 205505,
    2025: 205505 * 1.02,
    2026: 205505 * 1.02 * 1.02
  },
  71: {
    2024: 216112,
    2025: 216112 * 1.02,
    2026: 216112 * 1.02 * 1.02
  },
  72: {
    2024: 231240,
    2025: 231240 * 1.02,
    2026: 231240 * 1.02 * 1.02
  }
}

const LOCALITIES: Locality = {
  ZX: {
    name: 'Rest of USA',
    2023: 4.05,
    2024: 4.37
  },
  AL: {
    name: 'Albany',
    2023: 12.15,
    2024: 12.95
  },
  AK: {
    name: 'Alaska',
    2023: 7.35,
    2024: 7.99
  },
  AQ: {
    name: 'Albuquerque',
    2023: 7.9,
    2024: 8.32
  },
  AT: {
    name: 'Atlanta',
    2023: 10.38,
    2024: 10.81
  },
  AU: {
    name: 'Austin',
    2023: 12.18,
    2024: 12.77
  },
  BH: {
    name: 'Birmingham',
    2023: 8.12,
    2024: 8.62
  },
  BO: {
    name: 'Boston',
    2023: 26.57,
    2024: 27.49
  },
  BU: {
    name: 'Buffalo',
    2023: 10.06,
    2024: 10.7
  },
  BN: {
    name: 'Burlington',
    2023: 11.98,
    2024: 12.64
  },
  CT: {
    name: 'Charlotte',
    2023: 10.94,
    2024: 11.57
  },
  CH: {
    name: 'Chicago',
    2023: 16.32,
    2024: 16.94
  },
  CI: {
    name: 'Cincinnati',
    2023: 7.03,
    2024: 7.37
  },
  CL: {
    name: 'Cleveland',
    2023: 7.63,
    2024: 7.95
  },
  CS: {
    name: 'Colorado Springs',
    2023: 10.29,
    2024: 10.91
  },
  CO: {
    name: 'Columbus',
    2023: 10.48,
    2024: 11.01
  },
  CC: {
    name: 'Corpus Christi',
    2023: 8.43,
    2024: 8.73
  },
  DA: {
    name: 'Dallas',
    2023: 15.79,
    2024: 16.33
  },
  DV: {
    name: 'Davenport',
    2023: 9.26,
    2024: 9.71
  },
  DG: {
    name: 'Dayton',
    2023: 10.68,
    2024: 11.23
  },
  DN: {
    name: 'Denver',
    2023: 18.02,
    2024: 18.85
  },
  DM: {
    name: 'Des Moines',
    2023: 8.53,
    2024: 9.08
  },
  DT: {
    name: 'Detroit',
    2023: 16.12,
    2024: 16.57
  },
  HB: {
    name: 'Harrisburg',
    2023: 9.57,
    2024: 10.08
  },
  HA: {
    name: 'Hartford',
    2023: 15.2,
    2024: 15.91
  },
  HI: {
    name: 'Hawaii',
    2023: 11.09,
    2024: 11.71
  },
  HO: {
    name: 'Houston',
    2023: 18.69,
    2024: 18.94
  },
  HU: {
    name: 'Huntsville',
    2023: 12.12,
    2024: 12.64
  },
  IN: {
    name: 'Indianapolis',
    2023: 5.67,
    2024: 5.99
  },
  KC: {
    name: 'Kansas City',
    2023: 8.82,
    2024: 9.29
  },
  LR: {
    name: 'Laredo',
    2023: 12.28,
    2024: 12.97
  },
  LV: {
    name: 'Las Vegas',
    2023: 10.8,
    2024: 11.27
  },
  LA: {
    name: 'Los Angeles',
    2023: 28.32,
    2024: 29.27
  },
  MI: {
    name: 'Miami',
    2023: 15.5,
    2024: 15.78
  },
  ML: {
    name: 'Milwaukee',
    2023: 10.6,
    2024: 11.01
  },
  MN: {
    name: 'Minneapolis',
    2023: 15.97,
    2024: 16.73
  },
  NY: {
    name: 'New York',
    2023: 42.03,
    2024: 43.11
  },
  OM: {
    name: 'Omaha',
    2023: 7.66,
    2024: 8.08
  },
  PB: {
    name: 'Palm Bay',
    2023: 6.28,
    2024: 6.58
  },
  PH: {
    name: 'Philadelphia',
    2023: 17.25,
    2024: 17.96
  },
  PX: {
    name: 'Phoenix',
    2023: 10.75,
    2024: 11.93
  },
  PI: {
    name: 'Pittsburgh',
    2023: 9.81,
    2024: 10.22
  },
  PO: {
    name: 'Portland',
    2023: 12.79,
    2024: 13.47
  },
  RA: {
    name: 'Raleigh',
    2023: 9.43,
    2024: 9.96
  },
  RI: {
    name: 'Richmond',
    2023: 10.85,
    2024: 11.38
  },
  SA: {
    name: 'Sacramento',
    2023: 16.98,
    2024: 17.84
  },
  SO: {
    name: 'San Antonio',
    2023: 11.53,
    2024: 12.02
  },
  SD: {
    name: 'San Diego',
    2023: 28.13,
    2024: 29.17
  },
  SJ: {
    name: 'San Jose',
    2023: 42.87,
    2024: 44.13
  },
  ST: {
    name: 'Seattle',
    2023: 23.46,
    2024: 24.7
  },
  SL: {
    name: 'Saint Louis',
    2023: 10.49,
    2024: 11.02
  },
  TU: {
    name: 'Tucson',
    2023: 8.7,
    2024: 9.22
  },
  VB: {
    name: 'Virginia Beach',
    2023: 10.18,
    2024: 10.7
  },
  WA: {
    name: 'Washington, DC',
    2023: 24.27,
    2024: 25.04
  }
}

function getBandMaxes(band: number): BandMaxRate {
  return BAND_MAXES[band]
}

function getLocality(locality: string): LocalityRate {
  return LOCALITIES[locality]
}

interface SalaryParameters {
  band: number | string
  base: number | string
  locality: string
}

interface Salary {
  band: number
  base: number
  localityName: string
  locality2023: number
  locality2024: number
  locality2025: number
  localityDiff: number
  localityLumpSum: number
  salaryCaps: Cap
  bandCaps: BandMaxRate
  salary2023base: number
  salary2023: number
  salary2024base: number
  salary2024: number
  bonus2024: number
  lumpSumLocality2024: string
  salary2025base: number
  salary2025: number
  bonus2025: number
  salary2026base: number
  salary2026: number
  bonus2026: number
  bandCap2024: number
  bandCap2025: number
  bandCap2026: number
}

function getSalary({ band, base, locality = 'ZX' }: SalaryParameters): Salary {
  const payBand = Number(band)
  const basePay = Number(base)
  const localityInfo = getLocality(locality)

  const salaryCaps = CAPS
  const bandCaps = getBandMaxes(payBand)

  const bandCap2024 = bandCaps['2024']
  const bandCap2025 = bandCaps['2025']
  const bandCap2026 = bandCaps['2026']

  const salary2023base = Math.min(basePay, bandCap2024)
  const salary2023 = Math.min(
    salary2023base * (1 + localityInfo['2023'] / 100),
    CAPS['2024']
  )
  const salary2024base = Math.min(salary2023base * 1.05, bandCap2024)
  const salary2024 = Math.min(
    salary2024base * (1 + localityInfo['2023'] / 100),
    CAPS['2024']
  )
  const salary2025base = Math.min(salary2024base * 1.048, bandCap2025)
  const salary2025 = Math.min(
    salary2025base * (1 + localityInfo['2024'] / 100),
    CAPS['2025']
  )
  const salary2026base = Math.min(salary2025base * 1.036, bandCap2026)
  const salary2026 = Math.min(
    salary2026base * (1 + localityInfo['2024'] / 100),
    CAPS['2026']
  )
  const localityDiff =
    Math.round((localityInfo['2024'] - localityInfo['2023']) * 100) / 100

  const localityLumpSum = salary2024base * 1.05 * (localityDiff / 100)

  const bonus2024 = salary2023 * 0.03 + 4000
  const bonus2025 = salary2024 * 0.02 + 3500
  const bonus2026 = salary2025 * 0.02 + 3000

  return {
    band: payBand,
    base: basePay,
    localityName: localityInfo.name,
    locality2023: localityInfo['2023'],
    locality2024: localityInfo['2024'],
    locality2025: localityInfo['2024'],
    localityDiff,
    localityLumpSum,
    salaryCaps,
    bandCaps,
    salary2023base,
    salary2023: formatUSD({ amount: salary2023, decimalPlaces: 2 }),
    salary2024base,
    salary2024: formatUSD({ amount: salary2024, decimalPlaces: 2 }),
    bonus2024: formatUSD({ amount: bonus2024, decimalPlaces: 2 }),
    salary2025base,
    salary2025: formatUSD({ amount: salary2025, decimalPlaces: 2 }),
    bonus2025: formatUSD({ amount: bonus2025, decimalPlaces: 2 }),
    salary2026base,
    salary2026: formatUSD({ amount: salary2026, decimalPlaces: 2 }),
    bonus2026: formatUSD({ amount: bonus2026, decimalPlaces: 2 }),
    bandCap2024,
    bandCap2025,
    bandCap2026
  }
}

export { BAND_MAXES, CAPS, LOCALITIES, getSalary }
