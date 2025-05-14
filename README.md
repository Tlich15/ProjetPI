Ce projet est une application web basée sur Flask, intégrant :

Une API REST pour l’interaction avec des modules métiers,

Une interface admin pour la gestion des utilisateurs et des données,

Une base de données MySQL,

L’authentification avec Flask-Login,

Les migrations via Flask-Migrate.


Flask-Web-App/
│
├── website/
│   ├── __init__.py       # Initialisation de l'app
│   ├── models.py         # Définition des modèles SQLAlchemy
│   ├── views.py          # Routes publiques
│   ├── auth.py           # Authentification
│   └── api.py            # Routes API
│
├── admin/
│   └── admin.py          # Interface Flask-Admin
│
├── migrations/           # Migrations de base de données
│
├── static/               # Fichiers statiques (CSS, JS, etc.)
├── templates/            # Fichiers HTML
│
├── config.py             # Config globale (DB, clé secrète)
├── run.py                # Point d'entrée de l'application
├── requirements.txt      # Dépendances Python
└── README.md             # Ce fichier

📊 Fichier Power BI à télécharger :
zip file [Test_Bashboard_PI_english.pbix](https://drive.google.com/file/d/1p_6lU_qgkm6cCehHx6wvDeZlML8B4jhA/view?usp=sharing)
