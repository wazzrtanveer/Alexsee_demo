export default {
  name: 'pageCollections',
  title: 'Page Collection',
  type: 'document',
  icon: () => '🕶️',
  fields: [
    { name: 'title', title: 'Titre de la Page', type: 'string', initialValue: 'Le Catalogue' },
    { name: 'subtext', title: 'Description de la Page', type: 'text', rows: 3, initialValue: 'Une sélection rigoureuse de montures de créateurs haut de gamme. Chaque pièce est choisie pour l’excellence de son façonnage et sa force graphique.' }
  ]
}
