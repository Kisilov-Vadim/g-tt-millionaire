/* eslint-disable import/no-extraneous-dependencies */
import { ReactWrapper } from "enzyme";
import { createStore } from "redux";
import { reducer } from "../store/store";
import { TInitialState } from "../types/storeTypes";

// Return node with the given data-test attribute
export const findByTestAttr = (wrapper:ReactWrapper, val:string) => wrapper.find(`[data-test="${val}"]`);

export const storeFactory = (initialState:TInitialState) => createStore(reducer, initialState);
