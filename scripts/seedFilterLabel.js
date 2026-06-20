import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function run() {
  console.log('Setting "filterLabel" field in Sanity document "pageCollections"...')
  try {
    const result = await client
      .patch('pageCollections')
      .set({ filterLabel: 'Filtrer par type ou créateur :' })
      .commit()
    console.log('Success! Updated pageCollections document:', result)
  } catch (err) {
    console.error('Error patching pageCollections document:', err)
  }
}

run()
