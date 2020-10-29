/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { shallow } from "enzyme";
import AnswersGroup from "./AnswersGroup";
import { findByTestAttr } from "../../testUtilits/index";

describe("test AnswersGroup component", () => {
  const setup = (props = {}) => {
    const setupProps = { ...props };
    return shallow(<AnswersGroup {...setupProps} />);
  };

  test("render main container", () => {
    const wrapper = setup();
    const container = findByTestAttr(wrapper, "group-container");
    expect(container.length).toBe(1);
  });
});
