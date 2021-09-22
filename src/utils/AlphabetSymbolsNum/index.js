// import PolybiusSquare from "../PolybiusSquare"

export const LowerCase = () => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
export const UpperCase = () => LowerCase().map(letter => letter.toUpperCase())
export const Num = () => [0,1,2,3,4,5,6,7,8,9]
export const Symbols = () => ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",`"`,"'","<",">",",",".","?","/"," "] 
export const WholeCharacters = () => LowerCase().concat(UpperCase(), Num(), Symbols())


export const shiftedArr = (givenArr = [], shiftedNum = 0) => {
    const doubledArr = givenArr.concat(givenArr)
    let shiftedArr = []
    for (let i = 0; i<givenArr.length; i++)
    {   shiftedArr.push(doubledArr[i+shiftedNum])
    }
    return shiftedArr
} 

export const shiftedItems = (givenArr = [], shiftedNum = 0, itemIdx = 0, shiftedNumItem) => {
    let result = []
    const shiftedEndArr = shiftedArr(givenArr[givenArr.length-1],2)
    for (let i = 0; i<givenArr.length-1; i++){ 
        if (i !== itemIdx-1) { 
            const shiftedArrItems = shiftedArr(givenArr[i],shiftedNum)
            // console.log(shiftedArrItems)
            for (let j = 0; j <shiftedArrItems.length; j++)
            result.push(shiftedArrItems[j])
        }
    }
    if (itemIdx){
        let numShift;
        (shiftedNumItem) 
            ?numShift = shiftedNumItem
            :numShift = shiftedNum
        const shiftedIdxItem = shiftedArr(givenArr[itemIdx-1],numShift)
        console.log(shiftedIdxItem)
        for (let i = 0; i< shiftedIdxItem.length; i++){
            result.push(shiftedIdxItem[i])
        }
    }
    return result.concat(shiftedEndArr)
}


export const splitedArr = (givenArr = [], shiftedNum = 0) => {
    let result = []
    for (let i = 0; i<=givenArr.length;i+=10){   
        const slicedArr = givenArr.slice(i,i+10)
        result.push(slicedArr)
        }
    return shiftedArr(result, shiftedNum)
}



export const RandomCharacters = (wholeShiftedNum = 3, wholeSplitedShitedNum = 7 , itemShiftedNum = 4, itemIdx = 6) => {
    let wholeChars = WholeCharacters()
    //Shifting the whole characters and return an Arr of the whole char
    //shiftedArr takes 2 args (an Arr of char and and shifting number) => return an Arr
    let wholeCharShifted
    wholeCharShifted = shiftedArr(wholeChars,wholeShiftedNum)
    //Now split them into 10 groups
    //SplitedArr splits them into 10 groups
    let wholeCharSplitedShifted = splitedArr(wholeCharShifted,wholeSplitedShitedNum)
     //Now shift items in each group of 10 groups above and return an Arr
    //shiftedItems takes 4 args (arr from splitedArr, shifting number for each group, the index of group number, and the shifted number for that group)
    let itemsInWholeArrSplitedShited = shiftedItems(wholeCharSplitedShifted,itemShiftedNum,itemIdx)
for (let i = 0; i<100 ; i++)
{
    wholeCharShifted = shiftedArr(itemsInWholeArrSplitedShited,7)
    wholeCharSplitedShifted = splitedArr(wholeCharShifted,6)
    itemsInWholeArrSplitedShited = shiftedItems(wholeCharSplitedShifted,4,3,5)}
    console.clear()
    console.log(itemsInWholeArrSplitedShited)

}

