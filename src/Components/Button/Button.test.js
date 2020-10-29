/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
import { findByTestAttr } from "../../testUtilits/index";

describe("test Button component", () => {
  const setup = () => shallow(<Button {...defaultProps} />);

  let wrapper;
  const clickFn = jest.fn();

  const defaultProps = {
    title: "Test Button",
    onClick: clickFn,
  };

  beforeEach(() => {
    wrapper = setup();
  });

  test("render button with correct title", () => {
    const button = findByTestAttr(wrapper, defaultProps.title);
    expect(button.length).toBe(1);
  });

  test("check click button", () => {
    const button = findByTestAttr(wrapper, defaultProps.title);
    button.simulate("click");
    const clickCount = clickFn.mock.calls.length;
    expect(clickCount).toBe(1);
  });
});
