// Score player and computer
let scorePlayer = 0;
let scoreComputer = 0;

// Récupération de l'image de votre choix et de l'ordinateur
const imgPlayer = document.querySelector(".resultPlayer img");
const imgComputer = document.querySelector(".resultComputer img");

// Récupération de votre h2 pour insérez le résultat (vous avez perdu, vous avez gagné)
let resultWin = document.querySelector('#resultWin');


// Your Choice
// Function qui s'active lorsque vous cliquez sur un des 3 choix (papier, pierre, ciseaux)
function yourChoice(choice) {
    // Insertion de votre choix dans l'image
    imgPlayer.setAttribute('src', `./media/${choice}.png`);
    // Appel de la function du choix de l'ordinateur
    choiceComputer(choice);
    // Insertion du score dans l'html
    document.querySelector('.resultComputer p').innerHTML = scoreComputer;
    document.querySelector('.resultPlayer p').innerHTML = scorePlayer;
}

// Choice Computer
function choiceComputer(choicePlayer) {
    // Creation d'un tableau 
    const arrayChoice = ["rock", "scissors", "paper"];
    // Génération d'un nombre aléatoire
    let choiceNumber = Math.floor(Math.random() * 3);
    // Insertion de l'image de l'ordinateur
    imgComputer.setAttribute('src', `./media/${arrayChoice[choiceNumber]}.png`);
    // Appel de la function qui determinera qui gagnera avec comme argument (monChoix, choixAdversaire);
    whoWins(choicePlayer, arrayChoice[choiceNumber])
}


// Who Wins function
// Function qui determine qui gagnera la manche
function whoWins(choicePlayer, choiceComputer) {
    // Check égalité
    if(choicePlayer === choiceComputer) {
        // Insertion du message d'égalité
        resultWin.innerHTML = "Egalité";
        return;
    }
    // Check Rock
    if(choicePlayer === "rock") {
        if(choiceComputer === "scissors") {
            // Insertion du message dans l'html
            resultWin.innerHTML = "Vous avez gagné";
            // Incrémentation de votre score
            scorePlayer++;
            return;
        } else {
            // Insertion du message dans l'html
            resultWin.innerHTML = "Vous avez perdu";
            // Incrémentation du score de l'ordinateur            
            scoreComputer++;
            return;
        }
    }

    // Check Paper 
    if(choicePlayer === "paper") {
        if(choiceComputer === "rock") {
            // Insertion du message dans l'html
            resultWin.innerHTML = "Vous avez gagné";
            // Incrémentation de votre score
            scorePlayer++;
            return;
        } else {
            // Insertion du message dans l'html
            resultWin.innerHTML = "Vous avez perdu";
            // Incrémentation du score de l'ordinateur
            scoreComputer++;
            return;
        }
    }

     // Check Scissors 
     if(choicePlayer === "scissors") {
        if(choiceComputer === "paper") {
            // Insertion du message dans l'html
            resultWin.innerHTML = "Vous avez gagné";
            // Incrémentation de votre score
            scorePlayer++;
            return;
        } else {
            // Insertion du message dans l'html
            resultWin.innerHTML = "Vous avez perdu";
            // Incrémentation du score de l'ordinateur
            scoreComputer++;
            return;
        }
    }
}
