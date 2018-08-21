let login = prompt('Enter login:');
let password;
let hours = new Date().getHours();
if (login === null){
    alert('Canceled')
} else if (login.length === 0){
    alert('Canceled')
} else if (login.length < 4){
    alert('I dont know any users having name length less than 4 symbols')
} else if (login === 'User'){
    password = prompt('Enter password:');
    if (password === '' || password === null){
        alert('Canceled')
    } else if (password === 'SuperUser'){
        if (hours < 20) {
            alert('Good day!')
        } else{
            alert('Good evening')
        }
    } else {
        alert('Wrong password')
    }
} else {
    alert('I dont know you')
}
