export default function validation (handler){
    const error = {}

    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

    if(handler.name === ""){
        error.name = "Name is required"
    }

    if(handler.password === ""){
        error.password = "password is required"
    }else if(!passwordpattern.test(handler.password)){
        error.password = "max length 8 character one special one upppercase latter "
    }

    if(handler.email === ""){
        error.email = "email is required"
    }else if(!emailpattern.test(handler.email)){
        error.email = "email did not match"
    }

    if(handler.reaptpassword !==  handler.password){
        error.reaptpassword = "password not match"
    }

    return error
 }