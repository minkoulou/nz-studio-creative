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

## Notes
- Le site est en HTML/CSS/JS statique, sans framework ni dépendances.
- Les formulaires ont l'attribut 
- Le bouton WhatsApp flottant pointe vers `wa.me/237694633010`.
