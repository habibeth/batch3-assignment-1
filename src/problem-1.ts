{

    //write a function which takes two parameter one of is print text another how many prints
    const repeatString = (printText: string, count: number): string => {
        let sumString: string = ""
        for (let i = 1; i <= count; i++) {
            sumString = printText + sumString;
        }
        return sumString
    }

    const myText = repeatString("Hello!", 3);
    console.log(myText)

    //
}