import { KermitConfigLoader } from "./kermit-config.loader"
import { Config, ConfigLoader } from "./config.interface"

describe("Kermit Config Loader", () => {
  it("should return provided config when project does provide", async () => {
    // Arrange
    const expected = {
      rules: "@hawkeye/rules"
    }

    const reader: any = jest.fn().mockImplementation(() => ({
      read: jest.fn(() => Promise.resolve(JSON.stringify(expected)))
    }))()

    const loader: ConfigLoader = new KermitConfigLoader(reader)

    // Act
    const config: Config = await loader.load()

    // Assert
    expect(reader.read).toHaveBeenCalledWith("kermit.json")
    expect(config).toEqual(expected)
  })
})
