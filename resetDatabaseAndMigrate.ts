// resetDatabaseAndMigrate.ts

import { execSync } from 'child_process'

async function resetDatabaseAndMigrate(): Promise<void> {
  // Delete all tables using Prisma CLI
  execSync('npx prisma migrate reset --force')

  // Run Prisma migrations
  execSync('npx prisma migrate dev')

  console.log('Database reset and migrations applied successfully.')
}

void resetDatabaseAndMigrate()
