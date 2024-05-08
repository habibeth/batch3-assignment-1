{
    // find the largest number of an array
    const findLargestNumber=(numbers: number[]) : number=>{
        let largestNumber: number = numbers[0]; // remember first element is the largest number
        for(let i = 1; i<=numbers.length; i++){

            //check the largest number
            if(numbers[i]>largestNumber){ 
                largestNumber = numbers[i];
            }
        }
        return largestNumber;
    }

    const largest = findLargestNumber([10,12,14,100,10,15,16]);
    console.log(largest)
    //
}