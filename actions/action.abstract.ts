import { Input } from "../commands/command.interface"

export abstract class AbstractAction {
  public abstract async handle(inputs?: Input[], options?: Input[]): Promise<void>
}
