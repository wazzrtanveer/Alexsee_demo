import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const defaultFilters = [
  { _key: 'filter_tous', _type: 'collectionFilter', label: 'Tous', filterType: 'all', value: '' },
  { _key: 'filter_optique', _type: 'collectionFilter', label: 'Optique', filterType: 'type', value: 'Optique' },
  { _key: 'filter_solaire', _type: 'collectionFilter', label: 'Solaire', filterType: 'type', value: 'Solaire' },
  { _key: 'filter_femme', _type: 'collectionFilter', label: 'Femme', filterType: 'gender', value: 'Femme' },
  { _key: 'filter_homme', _type: 'collectionFilter', label: 'Homme', filterType: 'gender', value: 'Homme' },
  { _key: 'filter_createur', _type: 'collectionFilter', label: 'Créateur', filterType: 'brand', value: 'alexsee,nackymade' },
  { _key: 'filter_nouveautes', _type: 'collectionFilter', label: 'Nouveautés', filterType: 'new', value: '' }
]

async function run() {
  console.log('Seeding collection filters into Sanity document "pageCollections"...')
  try {
    const result = await client
      .patch('pageCollections')
      .setIfMissing({ filters: [] })
      .set({ filters: defaultFilters })
      .commit()
    console.log('Success! Patched pageCollections document:', result)
  } catch (err) {
    console.error('Error patching pageCollections document:', err)
  }
}

run()
