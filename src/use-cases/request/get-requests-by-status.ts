import { prisma } from '@/lib/prisma'

interface GetRequestsByStatusRequest {
  status: 'NEW' | 'ACCEPTED' | 'DENIED' | 'SENT'
}

export async function getRequestsByStatus({
  status,
}: GetRequestsByStatusRequest) {
  const requests = await prisma.requester.findMany({
    where: { status },
  })

  return { requests }
}
