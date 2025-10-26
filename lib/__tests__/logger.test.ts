import { log, logger, createChildLogger } from "../logger"
import jest from "jest"

describe("Logger", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe("log helpers", () => {
    it("should log info messages", () => {
      const spy = jest.spyOn(logger, "info")
      log.info("test message", { key: "value" })
      expect(spy).toHaveBeenCalledWith({ key: "value" }, "test message")
    })

    it("should log error messages", () => {
      const spy = jest.spyOn(logger, "error")
      const error = new Error("test error")
      log.error("error occurred", error)
      expect(spy).toHaveBeenCalledWith({ err: error }, "error occurred")
    })

    it("should log warnings", () => {
      const spy = jest.spyOn(logger, "warn")
      log.warn("warning message")
      expect(spy).toHaveBeenCalledWith({}, "warning message")
    })
  })

  describe("createChildLogger", () => {
    it("should create child logger with context", () => {
      const child = createChildLogger({ module: "test" })
      expect(child).toBeDefined()
      const spy = jest.spyOn(child, "info")
      child.info("test")
      expect(spy).toHaveBeenCalled()
    })
  })
})
