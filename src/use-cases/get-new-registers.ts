import { prisma } from '../lib/prisma'

export async function getNewRegisters() {
  const newRegisters = await prisma.registered.findMany({
    where: { status: 'NEW' },
  })

  return { newRegisters }
}
