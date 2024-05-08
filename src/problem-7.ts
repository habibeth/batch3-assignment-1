{
    //if input is string print the text otherwise show error message
    const logString = (value: unknown): string => {
        if (typeof (value) === "string") {
            return value;
        }

        else {
            return "Input is not a string.";
        }
    }

    const myText = logString("Hello, TypeScript!");
    console.log(myText)
    //
}