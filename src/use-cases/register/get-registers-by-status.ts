import { prisma } from '../../lib/prisma'

interface GetRegistersByStatusRequest {
  status: 'NEW' | 'ACCEPTED' | 'DENIED' | 'SENT'
}

export async function getRegistersByStatus({
  status,
}: GetRegistersByStatusRequest) {
  const registers = await prisma.registered.findMany({
    where: { status },
  })

  return { registers }
}
