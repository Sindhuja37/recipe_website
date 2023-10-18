import React from "react";
import { shallow } from "enzyme";
import RecipeList from "./recipeList.js";
import sinon from "sinon";

describe("Test App Entry point", function () {
  it("should have a header tag with Hello world React!", function () {
    const wrapper = shallow(<RecipeList />);
    expect(wrapper.find("h1").text()).toEqual("Tasty recipes");
  });
});

describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<RecipeList />);
  });
});

describe("MyComponent", () => {
  it("should render initial layout", () => {
    const component = shallow(<RecipeList />);
    expect(component.getElements()).toMatchSnapshot();
  });
});

describe("MyComponent", () => {
  it("responds to input change", (done) => {
    const handleAddRecipe = sinon.spy();
    const actualNode = shallow(<RecipeList onClick={handleAddRecipe} />);
    actualNode.find(".button").simulate("click");
    sinon.assert.called(handleAddRecipe);
  });
});

let wrapper;
const handleNext = jest.fn();
beforeEach(() => {
  wrapper = mount(<ModelStepper handleNext={handleNext} />);
});
it("handleNext increment", () => {
  const btn = wrapper.find(Button).at(1);
  expect(handleNext).toBeCalledTimes(0);
  btn.simulate("click");
  expect(handleNext).toBeCalledTimes(1);
});
