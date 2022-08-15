import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Todo from './Todo';
import Form from './Form'

describe("Button Checking", () => {
    it("Should hava a item", ()=>{
        const{getByTestId} = render(<Todo />);
        expect(getByTestId("todo-item")).toBeDefined();

    })
    it("Should hava a completed button", ()=>{
        const{getByTestId} = render(<Todo />);
        expect(getByTestId("todo-complete")).toBeDefined();

    })
    it("Should hava a Trash button", ()=>{
        const{getByTestId} = render(<Todo />);
        expect(getByTestId("todo-trash")).toBeDefined();
    })


})

describe("Testing the Functionality", () => {

    it("Adding a text and click the complete button", () => {
        const {getByTestId} = render(<Form />);
        fireEvent.change(getByTestId("input-field"), {target:{value:"hi"}});
        fireEvent.click(getByTestId("input-button"));
        fireEvent.click(getByTestId("todo-complete"));
        expect(getByTestId("todo-item")).toHaveAttribute("class","todo todo-item completed");

    })

    it("Adding a text and click the complete button & again complete button test", () => {
        const {getByTestId} = render(<Form />);
        fireEvent.change(getByTestId("input-field"), {target:{value:"hi"}});
        fireEvent.click(getByTestId("input-button"));
        fireEvent.click(getByTestId("todo-complete"));
        fireEvent.click(getByTestId("todo-complete"));
        expect(getByTestId("todo-item")).toHaveAttribute("class","todo todo-item ");

    })


    it("Adding a text and click the Trash button", () => {
        const form = render(<Form />);
        fireEvent.change(form.getByTestId("input-field"), {target:{value:"hi"}});
        fireEvent.click(form.getByTestId("input-button"));
        fireEvent.click(form.getByTestId("todo-trash"));
        expect(form.queryByText("hi")).not.toBeInTheDocument();
    })
})