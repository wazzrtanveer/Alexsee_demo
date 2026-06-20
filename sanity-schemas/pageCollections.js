export default {
  name: 'pageCollections',
  title: 'Page Collection',
  type: 'document',
  icon: () => '🕶️',
  fields: [
    { name: 'title', title: 'Titre de la Page', type: 'string', initialValue: 'Le Catalogue' },
    { name: 'subtext', title: 'Description de la Page', type: 'text', rows: 3, initialValue: 'Une sélection rigoureuse de montures de créateurs haut de gamme. Chaque pièce est choisie pour l’excellence de son façonnage et sa force graphique.' },
    { name: 'filterLabel', title: 'Label de la Section Filtre', type: 'string', initialValue: 'Filtrer par type ou créateur :' },
    {
      name: 'seo',
      title: 'Référencement (SEO)',
      type: 'seo'
    }
  ]
}
