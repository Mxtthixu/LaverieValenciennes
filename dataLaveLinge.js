//Adresse - Quantité - Prix - Poids - Prix/Poids

let data = [["31 Rue des Récollets", "1", "3€", "6kg", "0.50€/kg"]
, ["31 Rue des Récollets", "2", "3.8€", "9kg", "0.42€/kg"]
, ["31 Rue des Récollets", "1", "5.5€", "15kg", "0.37€/kg"]
, ["Carrefour, Av. Henri Matisse", "2", "2€", "8kg", "0.25€/kg"]
, ["Carrefour, Av. Henri Matisse", "3", "7€", "18kg", "0.39€/kg"]
, ["Auchan, 79 Av. du Général Horne", "1", "5€", "9kg", "0.56€/kg"]
, ["Auchan, 79 Av. du Général Horne", "1", "12€", "20kg", "0.60€/kg"]
, ["3 P Rue des Bessemers", "4", "4€", "9kg", "0.44€/kg"]
, ["3 P Rue des Bessemers", "2", "8€", "14kg", "0.57€/kg"]
, ["3 P Rue des Bessemers", "1", "10€", "20kg", "0.50€/kg"]
, ["3 P Rue des Bessemers", "1", "14€", "27kg", "0.52€/kg"]
, ["Supeco, 860 Bd Henri Harpignies", "1", "5€", "8kg", "0.63€/kg"]
, ["Supeco, 860 Bd Henri Harpignies", "1", "10€", "18kg", "0.56€/kg"]
, ["Auchan, 59 Av. de Verdun", "1", "5€", "9kg", "0.56€/kg"]
, ["Auchan, 59 Av. de Verdun", "1", "12€", "20kg", "0.60€/kg"]
, ["91 Rue des Quesnoy", "3", "4.50€", "6kg", "0.75€/kg"]
, ["91 Rue des Quesnoy", "2", "9€", "14kg", "0.64€/kg"]
, ["91 Rue des Quesnoy", "1", "11€", "20kg", "0.55€/kg"]
, ["107 Rue de Lille", "3", "4.50", "6kg", "0.75€/kg"]
, ["107 Rue de Lille", "2", "9", "14kg", "0.64€/kg"]
, ["107 Rue de Lille", "1", "11", "20kg", "0.55€/kg"]
, ["35 Rue de Mons", "5", "3.50€", "6kg", "0.58€/kg"]
, ["35 Rue de Mons", "3", "4.20€", "7kg", "0.60€/kg"]
, ["35 Rue de Mons", "1", "6.40€", "10kg", "0.64€/kg"]
, ["35 Rue de Mons", "2", "7.80€", "16kg", "0.49€/kg"]
, ["Intermarche, 26 Rue Jules France", "1", "5€", "9kg", "0.56€/kg"]
, ["Intermarche, 26 Rue Jules France", "1", "12€", "20kg", "0.60€/kg"]
]

let valenciennes = ["107 Rue de Lille", "35 Rue de Mons", "31 Rue des Récollets", "Auchan, 79 Av. du Général Horne", "Supeco, 860 Bd Henri Harpignies", "Auchan, 59 Av. de Verdun", "91 Rue des Quesnoy"]
let aulnoy = ["Carrefour, Av. Henri Matisse", "3 P Rue des Bessemers"]
let anzin = []
let beuvrages = ["Intermarche, 26 Rue Jules France"]
let saint_saulve = []


// il y en a a carrefour près de l'église ?