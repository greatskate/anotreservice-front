/* eslint-disable */

const Categories=[
  "sport",
  "maison",
  "jardin",
  "vie de quartier",
  "informatique"
]
const SERVICE_BRICOLAGE_1= {
  url_profil_picture:"https://www.lyonmag.com/medias/images/stephane-bern45.jpg",
  profil_name:"VALERIE",
  description:"Bricolage en tout genre",
  uev:15,
  time:"1h30",
  square:"Lille"}
const SERVICE_BRICOLAGE_2= {
  url_profil_picture:"https://www.lyonmag.com/medias/images/stephane-bern45.jpg",
  profil_name:"Charlotte",
  description:"Monter un meuble",
  uev:35,
  time:"1h",
  square:"Lille"}
const SERVICE_JARDIN_1= {
  url_profil_picture:"https://www.lyonmag.com/medias/images/stephane-bern45.jpg",
  profil_name:"Thomas",
  description:"Arroser les fleurs",
  uev:25,
  time:"30min",
  square:"Lille"}

const CONVERSATION_VALERIE_1 = {
  url_profil_picture:"https://www.lyonmag.com/medias/images/stephane-bern45.jpg",
  profil_name:"Charlotte",
  last_message:"Salut du coup c'est quel type de meuble ?",
  time:"5h",
}

const COMMENTARY_VALERIE_1 = {profil_name:"Charlotte",text:"Super experience !"}
const COMMENTARY_VALERIE_2 = {profil_name:"Gautier",text:"Super Délire !"}
const COMMENTARY_VALERIE_3 = {profil_name:"Thomas",text:"Super personne !"}
const COMMENTARY_CHARLOTTE_1 = {profil_name:"Sebastien",text:"Bonne experience"}

const JARDIN_ET_POTAGER_SMALL = {
  id:1,
  name:"Jardinage et potager",
  description:"Bonjour, ici se retrouvent tous les fans de potager et de jardinage, conseils,services zefzefzefze zefzefzef zfefethyre",
  members:3,
  partages:0,
  square:"Lille"
}
const BRICOLAGE_SMALL = {
  id:2,
  name:"Bricolage",
  description:"Bonjour, ici se retrouvent tous les fans de Bricolage, conseils,services zefzefzefze zefzefzef zfefethyre",
  members:4,
  partages:0,
  square:"Villeneuve d'ascq",
}
const JARDIN_ET_POTAGER= {
  id:1,
  name:"Jardinage et potager",
  owner_name:"Thomas",
  members:3,
  square:"Lille",
  messages:[SERVICE_JARDIN_1],
  cp:5900
}
const BRICOLAGE= {
  id:2,
  name:"Bricolage",
  owner_name:"Valerie",
  members:4,
  square:"Villeneuve D'ascq",
  messages:[SERVICE_BRICOLAGE_1,SERVICE_BRICOLAGE_2]
}

VALERIE = {
  id:1,
  name:"Valerie",
  uev:5,
  square:"Lille",
  join_date:"23/01/2019",
  communities_member:[],
  communities_admin:[2],
}
CHARLOTTE = {
  id:2,
  name:"Charlotte",
  uev:40,
  square:"Lille",
  join_date:"21/01/2019",
  communities_member:[1,2],
  communities_admin:[],
}
THOMAS = {
  id:3,
  name:"Thomas",
  uev:30,
  square:"HELLEMME",
  join_date:"20/01/2019",
  communities_member:[2],
  communities_admin:[1],
}

SEBASTIEN = {
  id:4,
  name:"Sebastien",
  uev:24,
  square:"LILLE",
  join_date:"28/01/2019",
  communities_member:[1],
  communities_admin:[],
}


GAUTIER = {
  id:5,
  name:"Gautier",
  uev:-4,
  square:"LILLE",
  join_date:"26/01/2019",
  communities_member:[2],
  communities_admin:[],
}
