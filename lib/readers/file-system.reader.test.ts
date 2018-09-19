import * as fs from "fs"

import { FileSystemReader } from "./file-system.reader"
import { Reader } from "./reader.interface"

jest.mock("fs", () => {
  return {
    readdir: jest.fn((_, callback) => callback(null, [])),
    readFile: jest.fn((_, callback) => callback(null, "mock content"))
  }
})

describe("File System Reader", () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  it("should call readdir with expected", async () => {
    // Arrange
    const dir: string = process.cwd()
    const reader: Reader = new FileSystemReader(dir)
    // Act
    const filenames: string[] = await reader.list()
    // Assert
    expect(fs.readdir).toHaveBeenCalled()
    expect(filenames).toEqual([])
  })

  it("should call readFile with expected", async () => {
    const dir: string = process.cwd()
    const reader: Reader = new FileSystemReader(dir)
    // Act
    const content: string = await reader.read("mock.txt")
    // Assert
    expect(fs.readdir).toHaveBeenCalled()
    expect(content).toEqual("mock content")
  })
})
