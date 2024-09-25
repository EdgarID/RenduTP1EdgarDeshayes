import { helloWorld } from "./hello-funcs";
import { helloYou } from "./hello-funcs";
import { helloHuman } from "./hello-funcs";
import type { Human } from "./types";
import { repeatHelloYou } from "./hello-funcs";

try {
    const message:string = helloYou("John");//World();
    console.log(message);
}catch(err){
    console.log("Desole, une erreur a ete detectee.");
    if (err instanceof Error)
    console.log("il s'agit de l'erreur \""+err.message+"\".");
}

const lui:Human={
    firstname:"John",
    lastname:"Doe",
    birthyear:1980
}
try{
    console.log(helloHuman(lui));
} catch (err) {
    console.log("Desole, une erreur a ete detectee.");
    if (err instanceof Error)
        console.log("il s'agit de l'erreur \""+err.message+"\".");
}
try{
    console.log(repeatHelloYou(4,"John"));
} catch (err) {
    console.log("Desole, une erreur a ete detectee.");
    if (err instanceof Error)
        console.log("il s'agit de l'erreur \""+err.message+"\".");
}
try{
    console.log(repeatHelloYou(-1,"o"));
} catch (err) {
    console.log("Desole, une erreur a ete detectee.");
    if (err instanceof Error)
        console.log("il s'agit de l'erreur \""+err.message+"\".");
}


