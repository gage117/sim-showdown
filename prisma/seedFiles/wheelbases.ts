const { Wheelbase, ForceFeedbackType } = require('@prisma/client')

const wheelbaseSeeds: Partial<typeof Wheelbase> = [
  {
    model: 'Pro',
    brand: {
      connect: {
        name: 'Logitech',
      },
    },
    price: 999.99,
    torque: 10,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: false,
    platforms: [
      'PC',
      'Playstation',
      'Xbox',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: true,
    pedals_included: false,
  },
  {
    model: 'CSL DD (5Nm)',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    price: 349.95,
    torque: 5,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
      'Xbox',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'CSL DD (8Nm)',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    price: 499.95,
    torque: 8,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
      'Xbox',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'GT DD (8Nm)',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    price: 599.95,
    torque: 8,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
      'Playstation',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'Podium DD1',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    price: 1199.95,
    torque: 20,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
      'Xbox',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'Podium DD2',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
    price: 1499.95,
    torque: 25,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
      'Xbox',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'Simucube 2 Sport',
    brand: {
      connect: {
        name: 'Simucube',
      },
    },
    price: 1199.00,
    torque: 17,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'Simucube 2 Pro',
    brand: {
      connect: {
        name: 'Simucube',
      },
    },
    price: 1379.00,
    torque: 25,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'Simucube 2 Ultimate',
    brand: {
      connect: {
        name: 'Simucube',
      },
    },
    price: 2949.00,
    torque: 32,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'R5',
    brand: {
      connect: {
        name: 'Moza',
      },
    },
    price: 319.00,
    torque: 5,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'R9',
    brand: {
      connect: {
        name: 'Moza',
      },
    },
    price: 439.00,
    torque: 9,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'R16',
    brand: {
      connect: {
        name: 'Moza',
      },
    },
    price: 899.00,
    torque: 16,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
  {
    model: 'R21',
    brand: {
      connect: {
        name: 'Moza',
      },
    },
    price: 1099.00,
    torque: 21,
    drive_type: ForceFeedbackType.DIRECT_DRIVE,
    swappable_wheels: true,
    platforms: [
      'PC',
    ],
    degrees_of_rotation: 'Infinite',
    wheel_included: false,
    pedals_included: false,
  },
]

module.exports = wheelbaseSeeds