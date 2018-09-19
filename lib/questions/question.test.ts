import { Question } from "inquirer"

import { generateInput, generateSelect } from "./question"
import { Input } from "../../commands/command.interface"

describe("generateInput", () => {
  it("should return an input question when Input value is undefined", () => {
    // Arrange
    const input: Input = {
      name: "input",
      value: undefined
    }

    // Act
    const question: Question | undefined = generateInput(input.name)(input.value)("input")

    // Assert
    expect(question).toEqual({
      message: "input :",
      default: "input",
      type: "input",
      name: "input"
    })
  })

  it("should return undefined when Input value is defined", () => {
    // Arrange
    const input: Input = {
      name: "input",
      value: "input"
    }
    // Act
    const question: Question | undefined = generateInput(input.name)(input.value)("input")
    // Assert
    expect(question).toEqual(undefined)
  })
})

describe("generateSelect", () => {
  it("should return a select question", () => {
    const choices: string[] = ["option-1", "option-2", "option-3"]
    const message: string = "message"
    const name: string = "name"

    // Act
    const question: Question | undefined = generateSelect(name)(message)(choices)

    // Assert
    expect(question).toEqual({
      type: "list",
      choices,
      message,
      name
    })
  })
})
