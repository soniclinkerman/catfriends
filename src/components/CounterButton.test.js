import React from "react";
import "../setupTest";
import { shallow, mount, render } from "enzyme";
import CounterButton from "./CounterButton";



it("expects CounterButton Component", () => {
    const mockColor = "red"
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot()
})


// it("should go up by 1 on click",() => {
//     const wrapper = shallow(<CounterButton/>)
//     const mockColor = "red"
//     // wrapper.setState({ count: 0})
//     // expect(wrapper.state('count')).toEqual(0);
//     // wrapper.setState({ count: 1 });
//     // expect(wrapper.state('count')).toEqual(1);
//     expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot()
// })


it("Correctly increments Counter when clicked", () => {
    const mockColor = "red"
    const wrapper = shallow(<CounterButton color={mockColor}/>)

    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({count: 1});

})