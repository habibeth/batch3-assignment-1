{
    //find the even numbers of an array
    const filterEvenNumbers = (numbers: number[]): number[] => {
        let  evenNumbers: number[] = [];
        for (let i = 1; i <= numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                evenNumbers.push(numbers[i])
            }
        }
        return evenNumbers;
    }

    const evenNumbersArray = filterEvenNumbers([1,2,3,4,5,6,7,8,9,10])
    console.log(evenNumbersArray)
}