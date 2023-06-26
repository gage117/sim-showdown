import type { Shifter } from '@prisma/client';
import type { SeedPartial } from './seedPartial';
import { ShifterType, ShifterSpeedType, ShifterThrowType, SensorType } from '@prisma/client'

type ShifterSeed = Partial<Shifter> & SeedPartial

const shifterSeeds: ShifterSeed[] = [
  {
    model: 'Driving Force Shifter',
    brand: {
      connect: {
        name: 'Logitech',
      },
    },
    price: 59.99,
    type: ShifterType.HPATTERN,
    speeds: [
      ShifterSpeedType.SIX_PLUS_REVERSE
    ],
    proprietary: true,
    throw: [
      ShifterThrowType.SHORT
    ],
    sensorType: SensorType.POTENTIOMETER,
    platforms: [
      'PC',
      'Playstation',
      'Xbox',
    ],
    notes: [
      'Proprietary to Logitech G923, G29 and G920 wheels',
    ]
  },
  {
    model: 'TH8A',
    brand: {
      connect: {
        name: 'Thrustmaster',
      },
    },
    price: 199.99,
    type: ShifterType.SEQUENTIAL_HPATTERN,
    speeds: [
      ShifterSpeedType.SEVEN_PLUS_REVERSE,
      ShifterSpeedType.SEQUENTIAL
    ],
    proprietary: false,
    throw: [
      ShifterThrowType.SHORT,
    ],
    sensorType: SensorType.HALL,
    platforms: [
      'PC',
      'Playstation',
      'Xbox',
    ]
  },
  {
    model: 'ClubSport Shifter SQ V 1.5',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    price: 259.95,
    type: ShifterType.SEQUENTIAL_HPATTERN,
    speeds: [
      ShifterSpeedType.SEVEN_PLUS_REVERSE,
      ShifterSpeedType.SEQUENTIAL
    ],
    proprietary: false,
    throw: [
      ShifterThrowType.SHORT,
    ],
    sensorType: SensorType.NA,
    platforms: [
      'PC',
      'Playstation',
      'Xbox',
    ],
    notes: [
      'Requires ClubSport USB Adapter to connect via USB to PC',
    ]
  }
]

export default shifterSeeds