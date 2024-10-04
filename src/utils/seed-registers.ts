import { prisma } from '../lib/prisma'
import { readRegistrationFile } from './read-registration-file'

export async function seedRegistrations() {
  const { fileRegistrations } = readRegistrationFile()

  const registrations = await prisma.registered.findMany()

  const newRegistrations: typeof fileRegistrations = []
  const RegistrationsEmails = registrations.map(
    registration => registration.email
  )

  fileRegistrations.forEach(fileRegistration => {
    if (!RegistrationsEmails.includes(fileRegistration.email)) {
      newRegistrations.push(fileRegistration)
    }
  })

  await prisma.registered.createMany({ data: newRegistrations })
}
