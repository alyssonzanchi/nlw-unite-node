import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'd7325b2a-d2aa-40ac-ba3a-6e336a46ecb3',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados(as) por código!',
            maximumAttendees: 120
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})