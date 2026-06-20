export default {
  name: 'pageContact',
  title: 'Page Rendez-vous (Contact)',
  type: 'document',
  icon: () => '📅',
  fields: [
    { name: 'title', title: 'Titre de la Page', type: 'string', initialValue: 'Prendre rendez-vous' },
    { name: 'subtext', title: 'Description de la Page', type: 'text', rows: 2, initialValue: 'Sollicitez un créneau pour essayer notre vestiaire de créateurs ou contrôler votre acuité sous une heure d’attention exclusive.' },
    { name: 'contactSubtext', title: 'Description Renseignements', type: 'text', rows: 2, initialValue: 'Pour des demandes immédiates ou l’annulation d’un rendez-vous planifié, n’hésitez pas à appeler notre équipe directement aux heures d\'ouverture régulières de notre atelier parisien.' },
    { name: 'accessSubtext', title: 'Description Accès', type: 'text', rows: 2, initialValue: 'Situé à l’angle de la rue d’Avron, proche Buzenval. Stationnement possible dans les rues adjacentes.' },
    { name: 'formButtonText', title: 'Texte Bouton Formulaire', type: 'string', initialValue: 'Réserver mon créneau à l’atelier' },
    {
      name: 'seo',
      title: 'Référencement (SEO)',
      type: 'seo'
    }
  ]
}
