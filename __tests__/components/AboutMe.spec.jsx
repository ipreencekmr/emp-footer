import React from "react";
import { render, screen } from "@testing-library/react";
import { AboutMe } from "../../src/components/AboutMe";

describe("AboutMe", () => {
    it("should render as expected", () => {
        render(<AboutMe></AboutMe>);
        expect(screen.getByText("Full Stack Engineer")).toBeInTheDocument();
    });
});