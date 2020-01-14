// generate random password

function generate(){

 //set password length/complexity
let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

 // create for loop to choose password characters

for(var i = 0; i <= complexity; i++){

    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

}

    // add password to text/ display area

    document.getElementById("display").value = password;


}

// default slider length of 8
document.getElementById("length").innerHTML = "Password Length: 12";

// length of slider position

document.getElementById("slider").oninput = function(){
    
    if(document.getElementById("slider").value > 8){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 8";

    }
}

// copy to clipboard

function copyPassword(){

document.getElementById("display").select();

document.execCommand("Copy");

alert("Password copied to clipboard!");

}


