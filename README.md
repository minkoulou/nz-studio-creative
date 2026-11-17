# NZ STUDIO CREATIVE — Site Web

## Structure du projet

```
├── index.html           Page d'accueil (hero, services, réalisations, processus, formulaire)
├── services.html        Nos services (2 blocs : communication + technologie)
├── realisations.html    Nos réalisations (UMO.PRO.CAO.E.SCOOPS + espace pour d'autres)
├── a-propos.html        À propos (mission, vision, valeurs, histoire, approche)
├── ressources.html      Ressources / blog (3 articles fictifs à remplacer)
├── contact.html         Contact (coordonnées, formulaire, carte Google Maps à intégrer)
├── devis.html           Demander un devis (formulaire court + WhatsApp)
├── style.css            Feuille de style partagée (variables, composants, responsive)
├── components.html      Référence : navbar, footer, WhatsApp float et JS (déjà intégrés dans chaque page)
├── img/
│   ├── logo.png         Logo officiel (fond blanc)
│   └── logo-transparent.png  Logo avec transparence
└── README.md            Ce fichier
```

## À faire par le développeur

### Prioritaire
- [ ] **Back-end des formulaires** : les 3 formulaires (accueil, contact, devis) n'envoient rien. Brancher un service d'envoi d'e-mail (EmailJS, Formspree, PHP mail, ou autre).
- [ ] **E-mail professionnel** : remplacer `contact@nzstudiocreative.com` par l'adresse définitive (page contact).
- [ ] **Google Maps** : remplacer le placeholder par un embed Google Maps avec l'adresse de l'agence.
- [ ] **Certificat SSL** : configurer HTTPS sur l'hébergement.
- [ ] **Favicon** : remplacer le PNG par un fichier .ico ou un SVG optimisé.

### Réseaux sociaux
- [ ] Créer les pages Facebook, LinkedIn et Instagram de l'agence.
- [ ] Remplacer les liens `href="#"` du footer par les vraies URLs.

### Photos
- [ ] Remplacer les photos Unsplash par des photos de terrain (coopératives, producteurs, plantations).
- [ ] Les URLs Unsplash actuelles sont des liens directs ; les remplacer par des fichiers locaux dans `/img/`.

### Blog / CMS
- [ ] Si un CMS est prévu (WordPress, etc.), adapter la page `ressources.html` pour qu'elle tire les articles de la base de données.
- [ ] Les 3 articles actuels sont des exemples fictifs à remplacer.

### Améliorations
- [ ] Google Analytics ou Matomo.
- [ ] Protection anti-spam des formulaires (reCAPTCHA ou honeypot).
- [ ] Mentions légales et politique de confidentialité (textes à rédiger).
- [ ] Optimisation des images (lazy loading, formats WebP).
- [ ] Sitemap XML et robots.txt pour le référencement.

## Charte graphique

### Couleurs
| Variable CSS    | Hex      | Utilisation                        |
|-----------------|----------|------------------------------------|
| `--navy`        | #071827  | Fond sombre, texte principal       |
| `--blue`        | #0875D8  | Accent principal, liens, boutons   |
| `--cyan`        | #00A8E0  | Accent secondaire, CTA alternatif  |
| `--turq`        | #00BFA8  | Accent complémentaire              |
| `--marine`      | #071C91  | Accent tertiaire                   |
| `--light`       | #F3F6FA  | Fonds de section clairs            |
| `--gray`        | #64748B  | Texte secondaire                   |
| `--line`        | #D5DEE9  | Bordures et séparateurs            |

### Polices (Google Fonts, déjà importées dans style.css)
- **Montserrat** : titres, boutons, navigation (600, 700, 800)
- **Inter** : texte courant, formulaires (400, 500, 600, 700)

### Responsive
Le CSS gère 3 breakpoints :
- Desktop : > 992px (grilles 2, 3 ou 4 colonnes)
- Tablette : 769–992px (grilles 2 colonnes, menu complet)
- Mobile : ≤ 768px (1 colonne, menu hamburger)

## Coordonnées de l'agence
- Téléphone / WhatsApp : +237 694 633 010
- Localisation : Yaoundé, Cameroun
- E-mail : à définir (contact@nzstudiocreative.com en placeholder)

## Notes
- Le site est en HTML/CSS/JS statique, sans framework ni dépendances.
- Les formulaires ont l'attribut `action="#"` : ils ne font rien sans back-end.
- Le bouton WhatsApp flottant pointe vers `wa.me/237694633010`.
- Les liens des réseaux sociaux dans le footer sont des `#` à remplacer.
- Aucun prix n'est affiché sur le site : la conversion passe par le formulaire de devis.
