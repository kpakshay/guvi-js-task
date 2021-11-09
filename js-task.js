let bt=document.getElementById("button");

// let name=document.getElementById("InputName").value
// var namecheck=/^[a-zA-Z]+$/;
// var emailcheck=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var namecheck=/^[a-zA-Z]+( [a-zA-Z]+)+$/;
var emailcheck= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var passcheck=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

// console.log(name.match(namecheck));
console.log("hhhkkk");
// document.getElementById("pt").innerText="name";
bt.addEventListener("click",(e)=>{
// function display(){
    e.preventDefault();
    let name=document.getElementById("InputName").value
    let age=document.getElementById("InputAge").value
    let email=document.getElementById("InputEmail").value
    let pass=document.getElementById("InputPassword").value
    let div=document.getElementById("result");

    // let name = name.value;
        if (name == "" || age== "" || email == "" || pass=="") {
            alert("All Fields are mandatory");
            
        }
        else if(!name.match(namecheck)){
            alert("Input valid name");
           
        }
        else if ( age < 1 || age > 99){
            alert("Input not in range");
            
        } 
        else if(!email.match(emailcheck)){
            alert("not valid email");
        }
        else if(!pass.match(passcheck)){
            alert("Password is not strong");
        }else{
            // document.getElementById("pt").innerText=document.getElementById("InputName").value;
            // var str=name+"\n"+age+"\n"+email+"\n"+pass;
            document.getElementById("h").innerText="Form Details";
            document.getElementById("pt").innerText= "Name: "+name+"\n"+"Age: "+age+"\n"+"Email: "+email+"\n"+"Password: "+pass;;
        }
    // console.log("hhh");
})