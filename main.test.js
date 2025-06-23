import { describe, expect, it } from "vitest";
import {
  analyzeArray,
  caesarCipher,
  calculator,
  capitalize,
  reverse,
} from "./main";

describe("capitalize", () => {
  it("should return undefined when an empty string is passed", () => {
    expect(capitalize("")).toBe(undefined);
  });
  it("should return 'Hello' when 'hello''is passed", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  it("should return 'Hello World' when 'hello World' is passed", () => {
    expect(capitalize("hello World")).toBe("Hello World");
  });
});

describe("reverse", () => {
  it("should return undefined when an empty string is passed", () => {
    expect(reverse("")).toBe(undefined);
  });
  it("should return olleh when hello is passed", () => {
    expect(reverse("hello")).toBe("olleh");
  });
  it("should return dlrow olleh when hello world is passed", () => {
    expect(reverse("hello world")).toBe("dlrow olleh");
  });
});

describe("calculator", () => {
  it("should return undefined when an unknown command is passes (3,3,something)", () => {
    expect(calculator(3, 3, "something")).toBe(undefined);
  });
  it("should return 6 when 3,3,add is passed", () => {
    expect(calculator(3, 3, "add")).toBe(6);
  });
  it("should return 0 when 3,3,subtract is passed", () => {
    expect(calculator(3, 3, "add")).toBe(6);
  });
  it("should return 9 when 3,3,multiply is passed", () => {
    expect(calculator(3, 3, "multiply")).toBe(9);
  });
  it("should return 1 when 3,3,divide is passed", () => {
    expect(calculator(3, 3, "divide")).toBe(1);
  });
  it("should return 'Nooooo!Don't divide by 0!' when 3,0,'divide' is passed", () => {
    expect(calculator(3, 0, "divide")).toBe("Nooooo!Don't divide by 0!");
  });
});

describe("caesarCipher", () => {
  it("should return abc when xyz,3 is passed in", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  it("should return ABC when XYZ,3 is passed in", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });
  it("should return KhOOr when HeLLo,3 is passed in", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  it("should return Khoor, Zruog! when Hello, World!,3 is passed in", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("analyzeArray", () => {
  it("should return an object with average 2, min 2, max 2 and length 4 when passed [2,2,2,2]", () => {
    expect(analyzeArray([2, 2, 2, 2])).toMatchObject({
      average: 2,
      min: 2,
      max: 2,
      length: 4,
    });
  });
});
