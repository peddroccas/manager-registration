import { prisma } from '../../lib/prisma'

interface UpdateRegisterStatusRequest {
  id: string
  status: 'NEW' | 'ACCEPTED' | 'DENIED'
}

export async function updateRegisterStatusRequest({
  id,
  status,
}: UpdateRegisterStatusRequest) {
  const register = await prisma.registered.update({
    where: { id },
    data: { status },
  })

  return { register }
}
