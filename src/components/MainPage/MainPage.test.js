import React from "react";
import "../../setupTest";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        kittens: [{
            id: 3,
            name: "s",
            email: "email"
        }],
        searchField: "a",
        isPending: false,
        error: ""
    }
    wrapper = shallow(<MainPage { ...mockProps}/>)
})

it("renders MainPage without crashing", () => {
    expect(wrapper).toMatchSnapshot();
})

it("filters robots correctly", () => {
    expect(wrapper.instance().filteredCats([])).toEqual([])
})
