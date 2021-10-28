/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

 beforeAll(() => {
     let fs = require("fs");
     let fileContents = fs.readFileSync("index.html", "utf-8");
     document.open(); //open the file
     document.write(fileContents); //write file contents
     document.close(); //then close it
 });
 
 describe("DOM tests", () => {
     test("Expects content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
     test("h1 should exist", () => {
         expect(document.getElementsByTagName("h1").length).toBe(1);
     });
 });