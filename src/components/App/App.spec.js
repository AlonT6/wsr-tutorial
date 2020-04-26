import React from "react";
import { render, waitForElement, getByTestId } from "@testing-library/react";
import App from "./App";
import {
  inputTestkitFactory,
  dropdownTestkitFactory,
  checkboxTestkitFactory,
  inputAreaTestkitFactory,
  buttonTestkitFactory,
  textTestkitFactory
} from "wix-style-react/dist/testkit";

function fillName(baseElement, name) {
  const driver = inputTestkitFactory({
    wrapper: baseElement,
    dataHook: "name-input"
  });
  driver.enterText(name);
}

async function fillForm(baseElement, funFact) {
  let driver = dropdownTestkitFactory({
    wrapper: baseElement,
    dataHook: "color-dropdown"
  });
  await driver.driver.selectOptionById(0);

  driver = checkboxTestkitFactory({
    wrapper: baseElement,
    dataHook: "agree-conditions-checkbox"
  });
  driver.click();

  driver = inputAreaTestkitFactory({
    wrapper: baseElement,
    dataHook: "fun-fact-input"
  });
  await driver.enterText(funFact);
}

describe("App", () => {
  it("should render the submitted info upon submitting", async () => {
    const name = "Alon";
    const color = "Red";
    const funFact = "Funnzy";

    const { baseElement } = render(<App />);

    fillName(baseElement, name);
    await fillForm(baseElement, funFact);

    let driver = buttonTestkitFactory({
      wrapper: baseElement,
      dataHook: "submit-button"
    });
    await driver.click();

    driver = textTestkitFactory({
      wrapper: baseElement,
      dataHook: "submitted-name"
    });
    expect(driver.getText()).toBe(name);

    driver = textTestkitFactory({
      wrapper: baseElement,
      dataHook: "submitted-color"
    });
    expect(driver.getText()).toBe(color);

    driver = textTestkitFactory({
      wrapper: baseElement,
      dataHook: "submitted-fun-fact"
    });
    expect(driver.getText()).toBe(funFact);
  });

  it("should not render the submitted info when name is missing", async () => {
    const color = "Red";
    const funFact = "Funnzy";

    const { baseElement } = render(<App />);

    await fillForm(baseElement, funFact);

    let driver = buttonTestkitFactory({
      wrapper: baseElement,
      dataHook: "submit-button"
    });
    await driver.click();

    driver = textTestkitFactory({
      wrapper: baseElement,
      dataHook: "submitted-name"
    });
    expect(driver.exists()).toBeFalsy();

    driver = textTestkitFactory({
      wrapper: baseElement,
      dataHook: "submitted-color"
    });
    expect(driver.exists()).toBeFalsy();

    driver = textTestkitFactory({
      wrapper: baseElement,
      dataHook: "submitted-fun-fact"
    });
    expect(driver.exists()).toBeFalsy();
  });

  it("should clear the form", async () => {
    const name = "Alon";
    const color = "Red";
    const funFact = "Funnzy";

    const { baseElement } = render(<App />);

    const nameInputDriver = inputTestkitFactory({
      wrapper: baseElement,
      dataHook: "name-input"
    });
    nameInputDriver.enterText(name);

    const dropDownDriver = dropdownTestkitFactory({
      wrapper: baseElement,
      dataHook: "color-dropdown"
    });
    await dropDownDriver.driver.selectOptionById(0);

    const checkboxDriver = checkboxTestkitFactory({
      wrapper: baseElement,
      dataHook: "agree-conditions-checkbox"
    });
    checkboxDriver.click();

    const funFactDriver = inputAreaTestkitFactory({
      wrapper: baseElement,
      dataHook: "fun-fact-input"
    });
    await funFactDriver.enterText(funFact);

    let driver = buttonTestkitFactory({
      wrapper: baseElement,
      dataHook: "clear-button"
    });
    await driver.click();

    expect(nameInputDriver.getText()).toBe("");
    expect(dropDownDriver.dropdownLayoutDriver.isOptionSelected(0)).toBeFalsy();
    expect(checkboxDriver.isChecked()).toBeFalsy();
    expect(funFactDriver.getValue()).toBe("");
  });
});
