import React from "react";
import { render, screen } from "@testing-library/react";
import { Copyright } from "../../src/components/Copyright";

describe("Copyright", () => {
    it("should render as expected", () => {
        render(<Copyright></Copyright>);
        expect(screen.getByRole("link")).toHaveAttribute("href", "https://about.me/ipreencekmr");
    });
});