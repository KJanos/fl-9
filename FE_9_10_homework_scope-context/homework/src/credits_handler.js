function userCard(key){
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        CurrentOperationTime = new Date();

    function addHistoryLog(operationType, credits, operationTime) {
        historyLogs.push({
            operationType:operationType,
            credits: credits,
            operationTime: operationTime
        });
    }

    return{
        getCardOptions(){
            return{balance, transactionLimit,historyLogs,key};
        },
        putCredits(amount){
            balance += amount;

            addHistoryLog('Received credits', amount, CurrentOperationTime );
        },
        takeCredits(amount){
            balance -= amount;

            addHistoryLog('Withdrawal of credits', amount, CurrentOperationTime );
        },
        setTransactionLimit(amount){
            transactionLimit = amount;

            addHistoryLog('Transaction limit change', amount, CurrentOperationTime);
        },
        transferCredits(amount, userCard){
            const tax = 0.005,
                taxedamount = amount * tax + amount;

            if(taxedamount > balance){
                console.log('Insufficient funds on the account. Transfer failed.')
            } else if (taxedamount > transactionLimit){
                console.log('Exceeded transaction limit. Transfer failed.')
            } else {
                this.takeCredits(taxedamount);
                userCard.putCredits(amount);
            }
        }
    }

}

class UserAccount{
    constructor (name){
        this.name = name;
        this.cards = [];
        this.maxcards = 3;
    }

    addCard(){
        if (this.cards.length < this.maxcards){
            this.cards.push(userCard(this.cards.length + 1));
        }else{
            console.log('You have already maximum of cards')
        }
    }

    getCardByKey(key){
        return this.cards[key - 1];
    }
}

let user = new UserAccount('Bob');
user.addCard()
user.addCard()

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());

console.log(card2.getCardOptions()); 