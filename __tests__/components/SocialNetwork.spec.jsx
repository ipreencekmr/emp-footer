import React from "react";
import { render, screen } from "@testing-library/react";
import { SocialNetwork } from "../../src/components/SocialNetwork";

describe("SocialNetwork", () => {
    it("should render as expected", () => {
        render(<SocialNetwork></SocialNetwork>);
        expect(screen.getAllByRole("link")).toHaveLength(4);
    });
});