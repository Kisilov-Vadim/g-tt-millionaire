/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import Answer from "./Answer";
import { findByTestAttr } from "../../testUtilits/index";

describe("test Answer component", () => {
  const selectButton = jest.fn();
  const defaultProps = {
    selected: false,
    children: "Paris",
    letter: "D",
    status: "success",
    onClick: selectButton,
  };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Answer {...setupProps} />);
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("render button element with status success", () => {
    const component = findByTestAttr(wrapper, defaultProps.status);
    expect(component.length).toBe(1);
  });

  test("render svg element", () => {
    const svg = findByTestAttr(wrapper, "borderSvg");
    expect(svg.length).toBe(1);
  });

  test("render children text element", () => {
    const children = findByTestAttr(wrapper, defaultProps.children);
    expect(children.length).toBe(1);
  });

  test("render letter element", () => {
    const letter = findByTestAttr(wrapper, defaultProps.letter);
    expect(letter.length).toBe(1);
  });

  test("button click is working if selected === false", () => {
    const button = findByTestAttr(wrapper, defaultProps.status);
    button.simulate("click");
    const clickCount = selectButton.mock.calls.length;
    expect(clickCount).toBe(1);
  });

  test("button click is working good if selected === true", () => {
    wrapper = setup({ selected: true });
    const button = findByTestAttr(wrapper, defaultProps.status);
    button.simulate("click");
    const clickCount = selectButton.mock.calls.length;
    expect(clickCount).toBe(0);
  });
});
