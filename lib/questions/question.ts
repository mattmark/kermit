import { Question, Answers } from "inquirer"

export function generateInput(
  name: string
): (value: string | undefined) => (defaultAnwser: string) => Question<Answers> | undefined {
  return (value: string | undefined) => {
    return value !== undefined
      ? () => undefined
      : (defaultAnswer: string): Question<Answers> => ({
          message: `${name} :`,
          default: defaultAnswer,
          type: "input",
          name
        })
  }
}

export function generateSelect(
  name: string
): (message: string) => (choices: string[]) => Question<Answers> {
  return (message: string) => {
    return (choices: string[]) => ({
      type: "list",
      choices,
      message,
      name
    })
  }
}
