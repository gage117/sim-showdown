import slugify from 'slugify'

// Function to call to ensure all are formatted the same
export function slugifyForDB(name: string): string {
  return slugify(name, { lower: true })
}