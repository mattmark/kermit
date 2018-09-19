import { readdir, readFile } from "fs"

import { Reader } from "./reader.interface"

export class FileSystemReader implements Reader {
  constructor(private readonly directory: string) {}

  public async list(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      readdir(this.directory, (error: NodeJS.ErrnoException, filenames: string[]) => {
        error ? reject(error) : resolve(filenames)
      })
    })
  }

  public async read(name: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      readFile(`${this.directory}/${name}`, (error: NodeJS.ErrnoException, data: Buffer) => {
        error ? reject(error) : resolve(data.toString())
      })
    })
  }
}
