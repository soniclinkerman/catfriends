import React from "react";
import "../../setupTest";
import { shallow, mount, render } from "enzyme";
import CardList from "./CardList";

it("should render Card Component",() => {
    const mockCats = [
        {
            id: 1,
            name: "Zay",
            username: "soniclinkerman",
            email: "Izpopsonic1@gmail.com"
        }
    ]
    expect(shallow(<CardList cats={mockCats} />)).toMatchSnapshot();
})
