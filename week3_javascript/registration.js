function registerUser() {
    // Your code goes here...

    // (1) Create the empty registrationForm array
    const registrationForm = [];

    // (2) Get all of the text fields
    const textElements = document.getElementsByClassName('field');
    const checkboxElement = document.getElementsByClassName('checkbox');

    // (3) Read the '.value' of every single text field
    let firstName = textElements[0].value;  // John
    let lastName = textElements[1].value;   // Doe
    let email = textElements[2].value;
    let password = textElements[3].value;
    let phoneNumber = textElements[4].value;

    let tcs = checkboxElement[0].checked;


    if( tcs === true) {
        // (4) Use '.push()' to out every text inside the 'registrationForm'
        registrationForm.push(firstName);
        registrationForm.push(lastName);
        registrationForm.push(email);
        registrationForm.push(password);
        registrationForm.push(phoneNumber);

        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        }

        // (5) Use 'alert()' to confirm the registrationForm
        // alert(registrationForm);
        fetch(
            'http://localhost:3001/users/create',
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then(
            (response)=>{
                console.log(response.json())
            }
        )
        .then(
            (json) => {
                console.log('from backend', json)
            }
        )
        
    } else {
        alert("Please read and accept the terms & conditions.")
    }

}