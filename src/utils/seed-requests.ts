import { prisma } from '../lib/prisma'
import { readRequestFile } from './read-request-file'

export async function seedRequests() {
  const { fileRequests } = readRequestFile()

  const requests = await prisma.requester.findMany()

  const newRequests: typeof fileRequests = []
  const requestsEmails = requests.map(request => request.email)

  fileRequests.forEach(fileRequest => {
    if (!requestsEmails.includes(fileRequest.email)) {
      newRequests.push(fileRequest)
    }
  })

  await prisma.requester.createMany({ data: newRequests })
}
