const { PrismaClient } = require('@prisma/client')
const slugify = require('slugify')

const prisma = new PrismaClient()

const brands = [
  {
    name: 'Moza',
  },
  {
    name: 'Fanatec',
  },
  {
    name: 'Logitech',
  },
  {
    name: 'Thrustmaster',
  },
  {
    name: 'Simagic',
  },
  {
    name: 'Heusinkveld',
  },
  {
    name: 'Cube Controls',
  },
  {
    name: 'Ascher Racing',
  },
  {
    name: 'Simucube',
  }
]

const wheelbases = [
  {
    model: 'CSL DD',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
  },
  {
    model: 'CSL Elite',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
  },
  {
    model: 'CSW 2.5',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
  },
  {
    model: 'Podium DD1',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
  },
  {
    model: 'Podium DD2',
    brand: {
      connect: {
        name: 'Fanatec',
      },
    },
  },
  {
    model: 'G923',
    brand: {
      connect: {
        name: 'Logitech',
      },
    },
  },
  {
    model: 'G29',
    brand: {
      connect: {
        name: 'Logitech',
      },
    },
  },
  {
    model: 'G27',
    brand: {
      connect: {
        name: 'Logitech',
      },
    },
  },
  {
    model: 'T300',
    brand: {
      connect: {
        name: 'Thrustmaster',
      },
    },
  },
  {
    model: 'T500',
    brand: {
      connect: {
        name: 'Thrustmaster',
      },
    },
  },
  {
    model: 'T-GT',
    brand: {
      connect: {
        name: 'Thrustmaster',
      },
    },
  },
  {
    model: 'Simucube 2 Pro',
    brand: {
      connect: {
        name: 'Simucube',
      },
    },
  },
  {
    model: 'Simucube 2 Ultimate',
    brand: {
      connect: {
        name: 'Simucube',
      },
    },
  },
  {
    model: 'Simucube 2 Sport',
    brand: {
      connect: {
        name: 'Simucube',
      },
    },
  },
  {
    model: 'Simagic Alpha',
    brand: {
      connect: {
        name: 'Simagic',
      },
    },
  },
  {
    model: 'Simagic M10',
    brand: {
      connect: {
        name: 'Simagic',
      },
    },
  },
  {
    model: 'Simagic Alpha Mini',
    brand: {
      connect: {
        name: 'Simagic',
      },
    },
  },
]

async function seed() {
  for (const brand of brands) {
    await prisma.brand.upsert({
      where: { name: brand.name },
      update: {
        slug: slugify(brand.name, { lower: true }),
      },
      create: brand,
    })
  }
  
  for (const wheelbase of wheelbases) {
    await prisma.wheelbase.upsert({
      where: { model: wheelbase.model },
      update: {
        slug: slugify(wheelbase.model, { lower: true }),
      },
      create: wheelbase,
    })
  }
}

seed()