const categories = ["Papeterie", "Accessoires", "Sacs"];
const boutique = {
    nom: "Stock & Fournitures",
    ville: "Youssoufia",
    ouverte: true
};
const produits = [
    {
        id: 101, nom: "Cahier", categorie: "Papeterie",
        prix: 20, stock: 5
    },
    {
        id: 102, nom: "Stylo", categorie: "Papeterie",
        prix: 10, stock: 0
    },
    {
        id: 103, nom: "Trousse", categorie: "Accessoires",
        prix: 35, stock: 3
    },
    {
        id: 104, nom: "Sac", categorie: "Sacs",
        prix: 120, stock: 2
    },
    {
        id: 105, nom: "Classeur", categorie: "Papeterie",
        prix: 30, stock: 4
    }
];

// 01. Organiser les catégories

// console.log(categories[0]);
// console.log(categories.length);

// categories.push("Classement");
// categories[1] = "Bureau";
// categories.pop();
// console.log(categories);

// // 02. Mettre la boutique à jour

// console.log(boutique.nom);
// console.log(boutique.ville);

// boutique.devise = "MAD";
// boutique.ouverte = "false"
// if(boutique.ouverte == "false"){
//     boutique.statut = "Fermée";
// }
// console.log(boutique);

// 03. Mettre à jour un inventaire

const copie = []
for (let i = 0; i < produits.length; i++) {
    copie.push({ ...produits[i] })
}
// console.log(copie);

for (let i = 0; i < copie.length; i++) {
    // console.log(copie[i].nom);
    // console.log(copie[i].stock);
}

for (let i = 0; i < copie.length; i++) {
    if (copie[i].nom === "Stylo") {

        copie[i].stock = 6;
    }
}

copie.push({
    id: 106, nom: "Gomme", categorie: "Papeterie",
    prix: 5, stock: 8
},);


for (let i = 0; i < copie.length; i++) {
    if (copie[i].id == 104) {

        copie.splice(i, 1);
    }
}

// console.log(copie);

// 04. Sélectionner les produits en rayon
const sup = produits.filter(superieure);

function superieure(produits) {
    return produits.stock > 0;
}

// console.log(sup);

const garde = sup.filter(garder)

function garder(sup) {
    return sup.categorie == "Papeterie";
}
// console.log(garde);

// 05. Préparer les étiquettes

const noms = produits.map(desnom)
function desnom(produits) {
    return produits.nom;
}
// console.log(noms);
const etiquette = produits.map(desetiquette)
function desetiquette(produits) {
    return `<< ${produits.nom} - ${produits.prix} DH >>`
}
// console.log(etiquette);

// 06. Calculer les totaux du stock

const totalstock = produits.reduce(calculstock, 0)
function calculstock(total, produit) {
    return total + produit.stock;
}
// console.log(totalstock);
const totalprix = produits.reduce(calculprix, 0)
function calculprix(total, produit) {
    return total + produit.prix * produit.stock
}
// console.log(totalprix);

// 07. Retrouver un produit

const recuper = produits.find((produit) => {
    return produit.id == 103
});
// console.log(recuper);

const essay = produits.find((produit) => {
    return produit.id == 199
});
// console.log(essay);

const indextrouss = produits.findIndex((produit)=>{
    return produit.id == 103
})
// console.log(indextrouss);

const index199 = produits.findIndex((produit)=>{
    return produit.id == 199
})
// console.log(index199);

// 08. Détecter une rupture

const some = produits.some((produit)=>{
    return produit.stock == 0
})
console.log(some);
