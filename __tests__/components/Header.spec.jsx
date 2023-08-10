import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../../src/components/Header";

describe("Header", () => {
    it("should render as expected", () => {
        const { container } = render(<Header></Header>);
        expect(container.querySelector("section")).toBeInTheDocument();
    });
});