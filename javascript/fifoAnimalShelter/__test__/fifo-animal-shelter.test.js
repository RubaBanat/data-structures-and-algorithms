"use strict"

const AnimalShelter = require("../fifo-animal-shelter.js");

test("“Happy Path” - Expected outcome", () => {
  const shelter = new AnimalShelter();
  const animal = { type: "cat", name: "kitty" }
  
  shelter.enqueue(animal)
  expect(shelter.cats.length).toEqual(1);
})

test("Expected failure", () => {
  const shelter = new AnimalShelter();
  const animal = { type: "camel", name: "anything" }
  

  expect(shelter.enqueue(animal)).toEqual("it should be Dog or Cat");
})

test("Edge Case (if applicable/obvious)", () => {
  const shelter = new AnimalShelter();
  const animal = {type:"animal"};

  expect(shelter.dequeue(animal)).toBeNull();
})