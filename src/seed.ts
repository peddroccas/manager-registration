import { seedRegistrations } from './utils/seed-registers'
import { seedRequests } from './utils/seed-requests'

async function seed() {
  await seedRequests()
  await seedRegistrations()
}
seed()
