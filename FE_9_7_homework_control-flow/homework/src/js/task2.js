let totalprize = 0;
let cont =false;
const conf ={
    prizemult : 3,
    randmult : 2,
    maxattempts :3
};
const data ={
    prize : 10,
    range: 5,
    magicone: 1
};
if (confirm('Do you want to play a game?')){
    do {
        cont = false;
        let num = Math.floor(Math.random() * (data.range+data.magicone));
        let win = false;
        for (let i = 0, prize = data.prize; i < conf.maxattempts; prize = Math.floor(prize/2), i++) {
            let usernum = +prompt('Enter a number from 0 to ' + data.range + '\n' +
                                    'Attempts left: ' + (conf.maxattempts-i) + '\n' +
                                    'Total prize: ' + totalprize + '$' + '\n'+
                                    'Possible prize on current attempt: '+ prize + '$');
            if (usernum === num) {

                totalprize+=prize;
                alert('Congratulation!   Your prize is: ' + prize + '$');
                if (confirm('Do you want to continue?')){
                    data.prize*=conf.prizemult;
                    data.range*=conf.randmult;
                    win = true;
                    cont = true;
                    break;
                } else{
                    break;
                }
            }
        }

        if (!win) {
            alert('Thank you for a game. Your prize is: ' + totalprize + '$');
            if (confirm('Do you want to play again?')){
            cont = true; 
}
        }

    } while (cont);
    alert('Thank you for a game. Your prize is: ' + totalprize + '$');
} else {
    alert('You did not become a millionaire, but can.')
}
