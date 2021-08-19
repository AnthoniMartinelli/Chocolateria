import React from "react";
import { cleanup, render } from "@testing-library/react";
import Rodape from "./Rodape";

describe("Rodape", () => {
  afterEach(() => cleanup());
  it("renderiza o Rodape", () => {
    const wrapper = render(<Rodape />);

    expect(wrapper.container).toMatchSnapshot();
  });
});
