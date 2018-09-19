export interface Config {
  [key: string]: any
}

export interface ConfigLoader {
  load(): Config | Promise<Config>
}
