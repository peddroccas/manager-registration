import { prisma } from '../../lib/prisma'

interface UpdateRegisterStatusRequest {
  id: string
  status: 'NEW' | 'ACCEPTED' | 'DENIED' | 'SENT'
}

export async function updateRegisterStatusRequest({
  id,
  status,
}: UpdateRegisterStatusRequest) {
  const registered = await prisma.registered.update({
    where: { id },
    data: { status },
  })

  return { registered }
}
