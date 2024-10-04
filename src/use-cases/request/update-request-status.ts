import { prisma } from '../../lib/prisma'

interface UpdateRequestStatusRequest {
  id: string
  status: 'NEW' | 'ACCEPTED' | 'DENIED'
}

export async function updateRequestStatusRequest({
  id,
  status,
}: UpdateRequestStatusRequest) {
  const requester = await prisma.requester.update({
    where: { id },
    data: { status },
  })

  return { requester }
}
