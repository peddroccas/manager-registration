import { prisma } from '../lib/prisma'

export async function getAllRegisters() {
  const registers = await prisma.registered.findMany({
    orderBy: { status: 'desc' },
  })

  return { registers }
}
