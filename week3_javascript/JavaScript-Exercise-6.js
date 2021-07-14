let accounts = [
    'jon.doe@gmail.com',
    'hana142@live.com',
    'mumbojumbo@yahoo.com',
    'rafik666@mail.ru',
    'brucelee@kung.fu',
    'jackiechan@gmail.com'
]

function accountSearch(email) {

    // (1) Format the entered email address
    // Deal with extra spaces
    email = email.trim();
    // Deal with letter casing
    email = email.toLowerCase();

    // (2.a) If match found,
    if(accounts.includes(email)) {
        // (3) Return 'account found'
        return 'account found';
    }
    // (2.b) If no match found,
    else {
        // (4) Return 'no account found'
        return 'account not found'
    }

}

console.log( accountSearch("   bRUCElee@kung.fu") )