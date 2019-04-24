import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("<Header />", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders an `.headerComponent`", () => {
    // const component = setUp();
    // console.log(component.debug());
    // const wrapper = component.find(".headerComponent");
    // const wrapper = component.find(`[data-test='headerComponent']`);
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    // const component = setUp();
    // const logo = component.find(".logoIMG");
    // const logo = component.find(`[data-test='logoIMG']`);
    const logo = findByTestAttr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
