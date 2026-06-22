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
    { name: 'imageTag1', title: 'Sur l’image - Tag gauche', type: 'string', initialValue: '[ 28 RUE D’AVRON ]' },
    { name: 'imageTag2', title: 'Sur l’image - Tag droite', type: 'string', initialValue: 'PARIS XXe ARRONDISSEMENT' },
    { name: 'imageTitle', title: 'Sur l’image - Titre', type: 'string', initialValue: 'AlexSEE\nAtelier' },
    { name: 'hoursTitle', title: 'Titre section Horaires', type: 'string', initialValue: 'Heures d’ouverture' },
    { name: 'directionsTitle', title: 'Titre section Accès', type: 'string', initialValue: 'Venir à la Boutique' },
    { name: 'locationLabel', title: 'Label Localisation', type: 'string', initialValue: 'Localisation' },
    { name: 'locationTitle', title: 'Titre Localisation', type: 'string', initialValue: 'AlexSEE Opticien Créateur' },
    { name: 'locationSubtitle', title: 'Sous-titre Localisation', type: 'string', initialValue: 'Quartier Charonne - Nation' },
    { name: 'metroLabel', title: 'Label Transports', type: 'string', initialValue: 'Transports Métro' },
    { name: 'mapMetroLine', title: 'Carte - Ligne de métro', type: 'string', initialValue: '9' },
    { name: 'mapMetroLabel', title: 'Carte - Station de métro', type: 'string', initialValue: 'Buzenval' },
    { name: 'mapStoreLabel', title: 'Carte - Nom du magasin', type: 'string', initialValue: 'AlexSEE (28 Rue d’Avron)' },
    {
      name: 'googleMapsLink',
      title: 'Lien Google Maps',
      type: 'object',
      fieldsets: [
        {
          name: 'linkFields',
          options: { columns: 2 }
        }
      ],
      fields: [
        { name: 'label', title: 'Texte du bouton', type: 'string', initialValue: 'Ouvrir dans Google Maps', fieldset: 'linkFields' },
        { name: 'url', title: 'URL de la carte', type: 'string', initialValue: 'https://maps.google.com/?q=28+Rue+d’Avron,+75020+Paris', fieldset: 'linkFields' }
      ]
    },
    {
      name: 'callAtelierLink',
      title: 'Lien Téléphone',
      type: 'object',
      fieldsets: [
        {
          name: 'linkFields',
          options: { columns: 2 }
        }
      ],
      fields: [
        { name: 'label', title: 'Texte du bouton', type: 'string', initialValue: 'Appeler l’Atelier', fieldset: 'linkFields' },
        { name: 'phone', title: 'Numéro de Téléphone', type: 'string', initialValue: '+33 (0)1 43 73 12 12', fieldset: 'linkFields' }
      ]
    },
    {
      name: 'seo',
      title: 'Référencement (SEO)',
      type: 'seo'
    }
  ]
}
