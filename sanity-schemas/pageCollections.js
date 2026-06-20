export default {
  name: 'pageCollections',
  title: 'Page Collection',
  type: 'document',
  icon: () => '🕶️',
  fields: [
    { name: 'title', title: 'Titre de la Page', type: 'string', initialValue: 'Le Catalogue' },
    { name: 'subtext', title: 'Description de la Page', type: 'text', rows: 3, initialValue: 'Une sélection rigoureuse de montures de créateurs haut de gamme. Chaque pièce est choisie pour l’excellence de son façonnage et sa force graphique.' },
    {
      name: 'filters',
      title: 'Filtres de la Collection (Tags)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'collectionFilter',
          title: 'Filtre de Collection',
          fields: [
            { name: 'label', title: 'Label du Tag (ex: Solaire)', type: 'string', validation: Rule => Rule.required() },
            {
              name: 'filterType',
              title: 'Type de Filtre',
              type: 'string',
              options: {
                list: [
                  { title: 'Tous (All)', value: 'all' },
                  { title: 'Type de monture (Optique/Solaire)', value: 'type' },
                  { title: 'Genre (Femme/Homme)', value: 'gender' },
                  { title: 'Marque (Brand)', value: 'brand' },
                  { title: 'Matériau (Material)', value: 'material' },
                  { title: 'Nouveautés (New)', value: 'new' },
                  { title: 'Sélection (Featured)', value: 'featured' }
                ]
              },
              validation: Rule => Rule.required(),
              initialValue: 'type'
            },
            {
              name: 'value',
              title: 'Valeur de comparaison (Optionnel)',
              type: 'string',
              description: 'La valeur à comparer (ex: Femme, Solaire, Titane, ou marque(s) séparées par des virgules)'
            }
          ]
        }
      ]
    },
    {
      name: 'seo',
      title: 'Référencement (SEO)',
      type: 'seo'
    }
  ]
}
