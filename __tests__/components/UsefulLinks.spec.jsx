import React from "react";
import { render, screen } from "@testing-library/react";
import { UsefulLinks } from "../../src/components/UsefulLinks";

describe("UsefulLinks", () => {
    it("should render as expected", () => {
        render(<UsefulLinks></UsefulLinks>);
        expect(screen.getAllByRole("link")).toHaveLength(4);
    });
});