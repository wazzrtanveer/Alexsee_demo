import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function run() {
  console.log('Unsetting "filters" field from Sanity document "pageCollections"...')
  try {
    const result = await client
      .patch('pageCollections')
      .unset(['filters'])
      .commit()
    console.log('Success! Reverted pageCollections document:', result)
  } catch (err) {
    console.error('Error patching pageCollections document:', err)
  }
}

run()
