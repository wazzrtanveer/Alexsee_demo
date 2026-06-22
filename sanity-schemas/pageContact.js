export default {
  name: 'pageContact',
  title: 'Page Rendez-vous (Contact)',
  type: 'document',
  icon: () => '📅',
  fields: [
    { name: 'title', title: 'Titre de la Page', type: 'string', initialValue: 'Prendre rendez-vous' },
    { name: 'subtext', title: 'Description de la Page', type: 'text', rows: 2, initialValue: 'Sollicitez un créneau pour essayer notre vestiaire de créateurs ou contrôler votre acuité sous une heure d’attention exclusive.' },
    
    // Form field labels and placeholders
    { name: 'nameLabel', title: 'Label - Nom & Prénom', type: 'string', initialValue: 'Votre Nom et Prénom *' },
    { name: 'namePlaceholder', title: 'Placeholder - Nom & Prénom', type: 'string', initialValue: 'Ex. Alexandre de Paris' },
    { name: 'emailLabel', title: 'Label - Adresse Courriel', type: 'string', initialValue: 'Adresse Courriel *' },
    { name: 'emailPlaceholder', title: 'Placeholder - Adresse Courriel', type: 'string', initialValue: 'Ex. mail@exemple.fr' },
    { name: 'phoneLabel', title: 'Label - Numéro de Téléphone', type: 'string', initialValue: 'Numéro de Téléphone *' },
    { name: 'phonePlaceholder', title: 'Placeholder - Numéro de Téléphone', type: 'string', initialValue: 'Ex. 01 43 73 12 12' },
    
    // Reason select field
    { name: 'reasonLabel', title: 'Label - Motif', type: 'string', initialValue: 'Sélection du motif' },
    {
      name: 'reasonOptions',
      title: 'Options du motif',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Valeur technique (ex: Conseil en montures créateur)', type: 'string' },
            { name: 'label', title: 'Texte affiché (ex: Conseil en montures créateur (1h))', type: 'string' }
          ]
        }
      ],
      initialValue: [
        { value: 'Conseil en montures créateur', label: 'Conseil en montures créateur (1h)' },
        { value: 'Examen de vue & Contrôle', label: 'Examen de vue & Contrôle (45min)' },
        { value: 'Ajustage technique ou entretien', label: 'Ajustage technique ou entretien (30min)' },
        { value: 'Sélection verres de haute technologie', label: 'Sélection verres de haute technologie (30min)' },
        { value: 'Espace Enfant & Solaire libre', label: 'Espace Enfant & Solaire libre' }
      ]
    },
    
    // Date & time selection
    { name: 'dateLabel', title: 'Label - Date souhaitée', type: 'string', initialValue: 'Date souhaitée *' },
    { name: 'timeLabel', title: 'Label - Créneau horaire', type: 'string', initialValue: 'Créneau horaire estimé :' },
    {
      name: 'timeSlots',
      title: 'Boutons créneaux horaires',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ["10:30", "11:00", "14:30", "15:30", "16:30", "17:30", "18:30"]
    },
    
    // Notes
    { name: 'notesLabel', title: 'Label - Notes', type: 'string', initialValue: 'Notes ou demandes spéciales' },
    { name: 'notesPlaceholder', title: 'Placeholder - Notes', type: 'string', initialValue: 'Ex. Précisions de prescription, montures aperçues, etc.' },
    
    // Form submit button
    { name: 'formButtonText', title: 'Texte Bouton Formulaire', type: 'string', initialValue: 'Réserver mon créneau à l’atelier' },
    
    // Sidebar elements
    { name: 'contactAltTitle', title: 'Titre - Contact Alternatif', type: 'string', initialValue: '[ Contact Alternatif ]' },
    { name: 'contactSubtext', title: 'Description Renseignements', type: 'text', rows: 2, initialValue: 'Pour des demandes immédiates ou l’annulation d’un rendez-vous planifié, n’hésitez pas à appeler notre équipe directement aux heures d\'ouverture régulières de notre atelier parisien.' },
    { name: 'phoneDirectLabel', title: 'Label - Téléphone direct', type: 'string', initialValue: 'Téléphone direct :' },
    { name: 'emailAtelierLabel', title: 'Label - Email d\'atelier', type: 'string', initialValue: 'Email d\'atelier :' },
    { name: 'instagramLabel', title: 'Label - Instagram', type: 'string', initialValue: 'Instagram :' },
    
    { name: 'accessTitle', title: 'Titre - Accès & Localisation', type: 'string', initialValue: 'Accès & Localisation' },
    { name: 'accessSubtext', title: 'Description Accès', type: 'text', rows: 2, initialValue: 'Situé à l’angle de la rue d’Avron, proche Buzenval. Stationnement possible dans les rues adjacentes.' },
    
    {
      name: 'seo',
      title: 'Référencement (SEO)',
      type: 'seo'
    }
  ]
}
