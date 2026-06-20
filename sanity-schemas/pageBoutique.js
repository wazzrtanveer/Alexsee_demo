export default {
  name: 'pageBoutique',
  title: 'Page Boutique',
  type: 'document',
  icon: () => '🏪',
  fields: [
    { name: 'title', title: 'Titre de la Page', type: 'string', initialValue: 'L’Atelier Paris 20e' },
    { name: 'subtext', title: 'Description de la Page', type: 'text', rows: 2, initialValue: 'Une escale optique intime située rue d’Avron. Venez prendre le temps de dialoguer autour de vos mesures et choisir des montures sous une lumière naturelle.' },
    { name: 'metroTitle', title: 'Titre Métro', type: 'string', initialValue: 'Ligne 9 ou Ligne 2' },
    { name: 'metroDetails', title: 'Détails Métro', type: 'text', rows: 2, initialValue: 'Station Buzenval (L9) à 3 min à pied.\nStation Avron (M2) à 6 min à pied.' },
    {
      name: 'seo',
      title: 'Référencement (SEO)',
      type: 'seo'
    }
  ]
}
