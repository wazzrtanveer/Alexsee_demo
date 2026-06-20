export default {
  name: 'pageServices',
  title: 'Page Savoir-Faire (Services)',
  type: 'document',
  icon: () => '🔬',
  fields: [
    { name: 'title', title: 'Titre de la Page', type: 'string', initialValue: 'L’Artisanat de la Vision' },
    { name: 'subtext', title: 'Description de la Page', type: 'text', rows: 2, initialValue: 'Notre charte d’artisan opticien de quartier : un accompagnement technique irréprochable combiné à un sens aiguisé du visagisme et des matières nobles.' },
    { name: 'noteTitle', title: 'Titre Note', type: 'string', initialValue: "Note d'art direction" },
    { name: 'noteSubtext', title: 'Description Note', type: 'text', rows: 2, initialValue: 'Remplacement de ces visuels par des clichés de votre atelier et d’essayages de montures réelles lors de la session de shooting photo.' },
    {
      name: 'seo',
      title: 'Référencement (SEO)',
      type: 'seo'
    }
  ]
}
