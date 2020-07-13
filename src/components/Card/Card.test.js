import React from "react";
import "../../setupTest";
import { shallow, mount, render } from "enzyme";
import Card from "./Card";


it("should render Card Component",() => {
    expect(shallow(<Card/>)).toMatchSnapshot();

})
