import {    shiftedArr, shiftedItems, splitedArr,
            WholeCharacters,
            RandomCharacters,
            } from "../../../../utils/AlphabetSymbolsNum";

export default function LockerCharacters () {
    const handleClick = () => console.log(RandomCharacters())
    return <>
    <button onClick = {handleClick}>
        click me
    </button>
    </>
}