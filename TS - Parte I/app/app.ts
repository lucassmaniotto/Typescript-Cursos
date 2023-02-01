import { NegotiantionController } from "./controllers/negotiation-controller.js";

const controller = new NegotiantionController();
const form = document.querySelector(".form");

form.addEventListener("submit", event => {
    event.preventDefault();
    controller.add();
});