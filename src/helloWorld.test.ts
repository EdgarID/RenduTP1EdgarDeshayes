import {expect, test } from "bun:test";
import { helloWorld } from "./hello-funcs";
import { helloYou } from "./hello-funcs";
import { helloHuman } from "./hello-funcs";
import type { Human } from "./types";
import { repeatHelloYou } from "./hello-funcs";

test("helloWorld", () => {
    expect(helloWorld()).toBe("Hello World!");
});

test("helloYou", () => {
    expect(helloYou("test")).toBe("Hello,test!");
    expect(() => helloYou("")).toThrowError("Nom vide")
});

const lui: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1980
}
const elle: Human = {
    firstname: "Johnnette",
    lastname: "Doe",
    birthyear: 2980
}
const ca: Human = {
    firstname: "",
    lastname: "Doe",
    birthyear: 1980
}
test("helloHuman", () => {
    expect(helloHuman(lui)).toBe("Hello, John Doe! You are 44 years old.");
    expect(() => helloHuman(elle)).toThrowError("Sarah Connor");
    expect(() => helloHuman(ca)).toThrowError("Nom vide");

});

test("repeatHelloYou", () => {
    expect(repeatHelloYou(3, "test")).toBe("\nHello,test!\nHello,test!\nHello,test!");
    expect(() => repeatHelloYou(-1, "test")).toThrowError("Iterateur negatif");
    expect(() => repeatHelloYou(3, " ")).toThrowError("Nom vide");
});