import React from 'react';
import { fireEvent, getByTestId, getByText, render } from '@testing-library/react';
import Form from './Form';


describe("Testing basic rendering of Form", ()=>{
    it("Should have input", () => {
        const {getByTestId}= render(<Form/>);
        expect(getByTestId("input-form")).toBeDefined();
    })

    it("Should have Input field", () => {
        const {getByTestId}= render(<Form/>);
        expect(getByTestId("input-field")).toHaveAttribute("type", "text");
    })

    it("Should have Add Button", () => {
        const {getByTestId}= render(<Form/>);
        expect(getByTestId("input-button")).toBeDefined();
    })

    it("Button should be hidden when there is no text", () => {
        const {getByTestId,getByRole} = render(<Form />);
        fireEvent.change(getByTestId("input-field"), {"target":{"value":""}});
        const button = getByRole("button",{"name":"Add"});
        expect(button).toBeDisabled();
    })

    it("Input have some value when we type",()=>{

      const {getByTestId,getByRole}= render(<Form/>)
      const input1=getByTestId("input-field")
      fireEvent.change(input1,{"target":{"value":"A"}})
      const button = getByRole("button",{"name":"Add"});
      expect(input1).toHaveAttribute("value","A");

  })

  it("Button should Not be Disabled when there is some text in input", () => {
    const {getByTestId} = render(<Form />);
    fireEvent.change(getByTestId("input-field"), {target:{value: "aa"}});
    expect(getByTestId("input-button")).not.toHaveAttribute("disabled");
});
})


describe("Testing the Functionality of Form", () => {
    it("Should add the given text", () => {
        const {getByTestId} = render(<Form />);
        fireEvent.change(getByTestId("input-field"), {target:{value:"text"}});
        fireEvent.click(getByTestId("input-button"));
        expect(getByTestId("todo-item")).toHaveTextContent("text");

    })


})