function sendMail(){
    let parms ={
        Name : document.getElementById("Name").ariaValueMax,
        Email : document.getElementById("Email").ariaValueMax,
        PhoneNumber : document.getElementById("PhoneNumber").ariaValueMax,
        Message : document.getElementById("Message").ariaValueMax,
        
    }
    emailjs.send("service_dyhvbiy","template_fp2yc48",parms).then(alert("Email Sent!!"))
}