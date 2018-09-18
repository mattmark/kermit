import { Question } from "inquirer"

import { generateInput, generateSelect } from "./question"
import { Input } from "../commands/command.interface"

import * as test from "tape"

test("generateInput", (t: test.Test) => {
  t.plan(2)

  t.test("should return an input question when Input value is undefined", assert => {
    // Arrange
    const input: Input = {
      name: "input",
      value: undefined
    }

    const expected = {
      message: "input :",
      default: "input",
      type: "input",
      name: "input"
    }

    // Act
    const question: Question | undefined = generateInput(input.name)(input.value)("input")

    // Assert
    assert.deepEqual(question, expected)
    assert.end()
  })

  t.test("should return undefined when Input value is defined", assert => {
    // Arrange
    const input: Input = {
      name: "input",
      value: "input"
    }

    const expected = undefined

    // Act
    const question: Question | undefined = generateInput(input.name)(input.value)("input")

    // Assert
    assert.equal(question, expected)
    assert.end()
  })

  t.end()
})

test("generateSelect", (t: test.Test) => {
  t.plan(1)

  t.test("should return a select question", assert => {
    // Arrange
    const choices: string[] = ["option-1", "option-2", "option-3"]
    const message: string = "message"
    const name: string = "name"

    const expected = {
      type: "list",
      choices,
      message,
      name
    }

    // Act
    const question: Question | undefined = generateSelect(name)(message)(choices)

    // Assert
    assert.deepEqual(question, expected)
    assert.end()
  })

  t.end()
})
