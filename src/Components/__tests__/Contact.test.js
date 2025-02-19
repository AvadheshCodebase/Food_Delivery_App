import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test(" check component load or not",()=>{
   render(<Contact/>)
  const heading= screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument(); //assertion provided by jest
});

test(" check button component is present or not",()=>{
    render(<Contact/>)

    //    const button= screen.getByRole("button");  //Quering
   const button= screen.getByText("Submit");
     
     expect(button).toBeInTheDocument(); //assertion provided by jest
 });

 test(" should load the all input box(3)",()=>{
    render(<Contact/>)

  //Quering
   const inputBox= screen.getAllByRole("textbox");

   console.log(inputBox.length);

   expect(inputBox.length).toBe(3);
     
    //  expect(inputBox).toBeInTheDocument(); //assertion provided by jest
 });