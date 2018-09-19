import { Reader } from "../readers/reader.interface"

import { Config, ConfigLoader } from "./config.interface"
import { defaultConfig } from "./config.defaults"

export class KermitConfigLoader implements ConfigLoader {
  constructor(private readonly reader: Reader) {}

  public async load(): Promise<Config> {
    const content: string | undefined = await this.reader.read("kermit.json")

    return content ? JSON.parse(content) : defaultConfig
  }
}
