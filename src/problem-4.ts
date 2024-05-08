{
    //reverse the array number
    const reverseArray = <T>(numbers: T[]): T[] =>{
        const reverse: T[] = [];
        for(let i = numbers.length -1; i>=0; i--){
            reverse.push(numbers[i]);
        }

        return reverse
    }

    const reverseNumber = reverseArray([1,2,3,4,5])
    console.log(reverseNumber);
    //
}