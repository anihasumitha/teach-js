const studentSolution = require("../exercise.js");

describe("Personlized Hello", () => {
    let promptMock, alertMock, consoleLogMock;

    beforeEach(() => {
        promptMock = jest.spyOn(window, "prompt").mockImplementation();
        alertMock = jest.spyOn(window, "alert").mockImplementation();
        consoleLogMock = jest.spyOn(console, "log").mockImplementation();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("Should show personalized hello message and log name length", () => {
        promptMock.mockReturnValue("Aniha");

        studentSolution.personalizedHello();

        expect(promptMock).toHaveBeenCalledWith("What is your name?");
        expect(alertMock).toHaveBeenCalledWith("Hello, Aniha!");
        expect(consoleLogMock).toHaveBeenCalledWith("The length of the name is 5");
    });

    
    test("Should alert 'No name provided!' when name is empty", () => {
        promptMock.mockReturnValue("");

        studentSolution.personalizedHello();

        expect(promptMock).toHaveBeenCalledWith("What is your name?");
        expect(alertMock).toHaveBeenCalledWith("No name provided!");
        expect(consoleLogMock).not.toHaveBeenCalledWith();
    });

    test("Should alert 'No name provided!' when name is null", () => {
        promptMock.mockReturnValue(null) //User canceling the prompt;

        studentSolution.personalizedHello();

        expect(promptMock).toHaveBeenCalledWith("What is your name?");
        expect(alertMock).toHaveBeenCalledWith("No name provided!");
        expect(consoleLogMock).not.toHaveBeenCalledWith();
    });



})