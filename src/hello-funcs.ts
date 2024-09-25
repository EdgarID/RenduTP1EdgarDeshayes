import type { Human } from "./types";

export function helloWorld():string{
    return("Hello World!");
}

export function helloYou(name:string):string{
    if (!name.trim()){
        throw new Error("Nom vide");
    }
    return ("Hello," + name + "!");

}

export function helloHuman(human:Human):string{
    if (!human.firstname.trim()) {
        throw new Error("Nom vide");
    }
    if (!human.lastname.trim()) {
        throw new Error("Nom vide");
    }
    if(human.birthyear>new Date().getFullYear()){
        throw new Error("Sarah Connor");
    }
    return ("Hello, " + human.firstname + " " + human.lastname + "! You are " + (new Date().getFullYear() - human.birthyear)+" years old.");
}

export function repeatHelloYou(n:number,name:string):string{
    if (!name.trim()) {
        throw new Error("Nom vide");
    }
    if (n<0){
        throw new Error("Iterateur negatif")
    }
    let message="";
    for(let i=0;i<n;i++){
        message+="\n"+helloYou(name);
    }
    return(message);
}