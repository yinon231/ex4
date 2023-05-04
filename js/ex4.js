window.onload=()=>{
    let selectAge=document.getElementById("select-age");
    for(let i=23;i<=38;i++)
    {
        newOption=document.createElement("option");
        newOption.text=i;
        newOption.value=i;
        selectAge.appendChild(newOption);
    }
    let valid=false;
    const form = document.getElementById('form-ex4');

    const nameInput = document.getElementById('fullName');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('mail');
    const urlInput=document.getElementById('website');
    const phoneInput = document.getElementById('phone');
    const coffeeInput=document.getElementById('coffee');
    const addressInput=document.getElementById('address');
    const ageInput=document.getElementById('select-age');
    function validateName()
    {
        const regex = /^[a-zA-Z]+\s/;
        if (!regex.test(nameInput.value)) 
        {  
            nameInput.classList.add('is-invalid');
            return false;
        }
        else {
            nameInput.classList.remove('is-invalid');
            nameInput.classList.add('is-valid');
            return true;
        }
    }
    nameInput.addEventListener('input',function(){
        validateName();
    });

    function validatePassword(){
        if (!(/[A-Z]/.test(passwordInput.value)&& passwordInput.value.length>=8)) {
            passwordInput.classList.add('is-invalid');
            return false;
        } else {
            passwordInput.classList.remove('is-invalid');
            passwordInput.classList.add('is-valid');
            return true;
        }

    }
    passwordInput.addEventListener('input',function(){
        validatePassword();
    });

    function validateEmail(){
        if(!emailInput.validity.valid)
        {
            emailInput.classList.add('is-invalid');
            return false;
        }
        else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
            return true;
        }

    }
    emailInput.addEventListener('input',function(){
        validateEmail();
    });

    function validateUrl(){
        if (!urlInput.validity.valid)
        {
            urlInput.classList.add('is-invalid');
            return false;
        } else {
            urlInput.classList.remove('is-invalid');
            urlInput.classList.add('is-valid');
            return true;
        }

    }

    urlInput.addEventListener('input',function(){
        validateUrl();   
    });

    function validatePhone(){
        const numberPattern = /^[0-9]+$/; 
        if (!(numberPattern.test(phoneInput.value)&& (phoneInput.value.length>=9 && phoneInput.value.length<=10)))
        {
            phoneInput.classList.add('is-invalid');
            return false;
        } else {
            phoneInput.classList.remove('is-invalid');
            phoneInput.classList.add('is-valid');
            return true;
        }
    }
    phoneInput.addEventListener('input',function(){
       validatePhone();
    });

    
    coffeeInput.addEventListener('input',function(){
        coffeeInput.classList.add('is-valid');
    });
    addressInput.addEventListener('input',function(){
        addressInput.classList.add('is-valid');
    });

    const checkboxes = document.querySelectorAll('input[name="interests[]"]');
    function validateCheckbox() {
    const checkNote=document.getElementById('check-note');
    const checkboxesChecked = document.querySelectorAll('input[name="interests[]"]:checked');
    if (checkboxesChecked.length !== 3) {
        checkNote.style.display="block";
        return false;
    } else {
        checkNote.style.display="none";
        return true;
    }
    }

    checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        validateCheckbox();
    });
    });


      const select = document.getElementById("select-age");
      function validateAge(){
        const selectedOption = select.value;
        if (selectedOption === '') 
        {
            select.classList.add('is-invalid');
            return false;
        } else {
            select.classList.remove('is-invalid');
            select.classList.add('is-valid');
            return true;
        }

      }

    select.addEventListener('change', function() {
       validateAge();
    });


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const isNameValid = validateName();
        const isPasswordValid = validatePassword();
        const isEmailValid = validateEmail();
        const isUrlValid = validateUrl();
        const isPhoneValid = validatePhone();
        const isCheckboxValid = validateCheckbox();
        const isAgeValid = validateAge();
    
        if (isNameValid && isPasswordValid && isEmailValid && isUrlValid && isPhoneValid && isCheckboxValid && isAgeValid) {
            form.submit();
        }
    });
}
