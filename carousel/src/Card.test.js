import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


// smoke test
it("renders without crashing", function() {
    render(<Card
            caption= "Test card"
            src = {TEST_IMAGES[0].src}
            currNum = {1}
            totalNum = {10} />);
});

// snapshot test
it ("matches snapshot", function () {
    const {asFragment} = render(<Card
                            caption= "Test card"
                            src = {TEST_IMAGES[0].src}
                            currNum = {1}
                            totalNum = {10} />);
    expect(asFragment()).toMatchSnapshot();
});