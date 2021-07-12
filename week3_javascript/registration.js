function registerUser() {
    // Your code goes here...

    // (1) Create the empty registrationForm array
    const registrationForm = [];

    // (2) Get all of the text fields
    const textElements = document.getElementsByClassName('field');
    const checkboxElement = document.getElementsByClassName('checkbox');

    // (3) Read the '.value' of every single text field
    let firstname = textElements[0].value;  // John
    let lastname = textElements[1].value;   // Doe
    let email = textElements[2].value;
    let password = textElements[3].value;
    let phone = textElements[4].value;

    let tcs = checkboxElement[0].checked;


    if( tcs === true) {
        // (4) Use '.push()' to out every text inside the 'registrationForm'
        registrationForm.push(firstname);
        registrationForm.push(lastname);
        registrationForm.push(email);
        registrationForm.push(password);
        registrationForm.push(phone);

        // (5) Use 'alert()' to confirm the registrationForm
        alert(registrationForm);
    } else {
        alert("Please read and accept the terms & conditions.")
    }

}