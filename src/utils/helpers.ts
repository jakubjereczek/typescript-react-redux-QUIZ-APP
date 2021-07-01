export const randomArrayValues = (array: any[]) => {
    const startNumber = Math.floor(Math.random() * array.length);
    let j = 0;
    const newArray: any[] = [];
    for (let i = startNumber; i < array.length + startNumber; i++) {
        if (i + 1 > array.length) {
            newArray.push(array[j]);
            j++;
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}