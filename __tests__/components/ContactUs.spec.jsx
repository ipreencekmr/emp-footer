import React from "react";
import { render } from "@testing-library/react";
import { ContactUs } from "../../src/components/ContactUs";

describe("ContactUs", () => {
    it("should render as expected", () => {
        const { container } = render(<ContactUs></ContactUs>);
        expect(container.querySelector("h6")).toHaveTextContent("Contact");
    });
});