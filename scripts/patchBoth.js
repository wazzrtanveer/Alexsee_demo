import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function run() {
  console.log('Patching both published and draft pageCollections documents...')
  try {
    // 1. Patch published document
    const resPublished = await client
      .patch('pageCollections')
      .set({ filterLabel: 'Filtrer par type ou créateur :' })
      .commit()
    console.log('Published document updated:', resPublished)
  } catch (err) {
    console.error('Error patching published document:', err.message)
  }

  try {
    // 2. Patch draft document
    const resDraft = await client
      .patch('drafts.pageCollections')
      .set({ filterLabel: 'Filtrer par type ou créateur :' })
      .commit()
    console.log('Draft document updated:', resDraft)
  } catch (err) {
    console.error('Error patching draft document:', err.message)
  }
}

run()
