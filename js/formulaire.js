// Une fois la page charger 
console.log('javascript lancé');
window.onload = function() {
    let btnEnvoyer = document.getElementById('envoyer');
    btnEnvoyer.addEventListener('click', valideFormulaire);
}

/**
 * Fonction de validation du formulaire
 * - appelle toutes les fonctions devalidation une par une
 */
function valideFormulaire(){
    let isNomValide = afficheControleNom();
    //let isPrenomValide = afficheControlePrenom();
    //let isBoutonRadioHFValide = afficheControleBoutonRadioHF();



    if(isNomValide && isPrenomValide && isBoutonRadioHFValide) {
        // à faire si tout est ok = par exemple afficher un message en vert pour informer l'internaute que son formulaire a été enregistré
    } else {
        // à faire si tout n'est pas ok = par exemple afficher un message en rouge pour informer l'internaute que son formulaire n'a pas été enregistré
        // et qu'il faut qu'il corrige les erreurs
    }
}

/**
* Afiiche si le champs du Nom est vide 
* @returns {undefined}
*/
function afficheControleNom() {
    console.log('fonction afficheControleNom');
    let nom;
   
    nom = document.forms["form_inscription"].elements["nom"].value;
    if( !nom.replace(/\s+/, '').length ) {
        let msgFormNom = document.getElementById('msgFormNom');
        msgFormNom.innerHTML = 'Le champ Nom est vide, veuillez le renseigner';
        msgFormNom.style.display = 'inline-block';
        msgFormNom.style.color = 'red';
        //alert( "Le champ nom est vide!" );
        return false;
   }
   else { return true; }
}

/**
* Affiche si le champs du Prénom est vide 
* @returns {undefined}
*/
function afficheControlePrenom() {
    var prenom;
   
    prenom = document.forms["form_inscription"].elements["prenom"].value;
    if( !prenom.replace(/\s+/, '').length ) {
        alert( "Le champ prénom est vide!" );
        return false;
   }
}

/**
*Contrôle du mot de passe
* @returns {undefined}
*/
function controleMotDePasse() {
    var mdp;
   
    mdp = document.forms["form_inscription"].elements["mdp-adherant"].value;
    if (mdp.match( /[0-9]/g) && 
    mdp.match( /[A-Z]/g) && 
    mdp.match(/[a-z]/g) && 
    mdp.match( /[^a-zA-Z\d]/g) &&
    mdp.length >= 8)
    return false;
    else 
    alert( "Le mot de passe est faible !" );
   }

/**
*Vérification du mot de passe
* @returns {undefined}
*/
function verificationMotDePasse() {
    var mdp = document.forms["form_inscription"].elements["mdp-adherant"].value;
    var verif_mdp;
    verif_mdp = document.forms["form_inscription"].elements["confirmation-mdp"].value;
    if (verif_mdp != mdp)
    alert("Les mots de passe ne sont pas identiques !");

}






