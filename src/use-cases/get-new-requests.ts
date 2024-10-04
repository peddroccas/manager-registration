import { prisma } from '../lib/prisma'

export async function getNewRequests() {
  const newRequests = await prisma.requester.findMany({
    where: { status: 'NEW' },
  })

  return { newRequests }
}
