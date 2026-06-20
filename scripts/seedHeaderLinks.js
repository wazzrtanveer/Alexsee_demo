import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const defaultLinks = [
  { _key: 'link_home', _type: 'navLink', label: 'Accueil Opticien', path: '/', num: '01' },
  { _key: 'link_collections', _type: 'navLink', label: 'Lookbook & Lunettes', path: '/collections', num: '02' },
  { _key: 'link_services', _type: 'navLink', label: 'L’Art de l’Optique', path: '/services', num: '03' },
  { _key: 'link_boutique', _type: 'navLink', label: 'L’Atelier Rue d’Avron', path: '/boutique', num: '04' },
  { _key: 'link_contact', _type: 'navLink', label: 'Prendre rendez-vous', path: '/contact', num: '05' }
]

async function run() {
  console.log('Seeding default headerLinks into Sanity settings document...')
  try {
    const result = await client
      .patch('settings')
      .setIfMissing({ headerLinks: [] })
      .set({ headerLinks: defaultLinks })
      .commit()
    console.log('Success! Updated settings document:', result)
  } catch (err) {
    console.error('Error patching settings document:', err)
  }
}

run()
