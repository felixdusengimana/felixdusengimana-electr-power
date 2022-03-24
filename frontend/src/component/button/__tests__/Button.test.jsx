import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer"
import React from "react";
import reactDom from "react-dom";
import Button from "../Button";

afterEach(cleanup)

describe('Button Component', () => { 
    it("renders button with label Click me please", () => {
        const div = document.createElement("div");
        reactDom.render(<Button label={"Click me please"} />, div)
      })
      
      it("renders button correctly", () => {
        const { getByTestId } = render(<Button label={"save"} />)
        expect(getByTestId("button")).toHaveTextContent("save")
      })
      
      it("matches snapshot", () => {
        const tree = renderer.create(<Button label={"Save"} />).toJSON()
        expect(tree).toMatchSnapshot()
      })
 })