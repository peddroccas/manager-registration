import { prisma } from '@/lib/prisma'

export async function getAllRequests() {
  const requests = await prisma.requester.findMany({
    orderBy: { status: 'desc' },
  })

  return { requests }
}
