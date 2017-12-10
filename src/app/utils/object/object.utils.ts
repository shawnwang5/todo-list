export function deleteEmptyProperties(obj) {
    const deletedArray = []
    Object.keys(obj).forEach(key => {
        if ((/^\s*$/.test(obj[key]) && obj[key].trim && obj[key].trim() === '') || obj[key] === null) {
            deletedArray.push(key)
            delete obj[key]
        }
    })
    return {
        targetObj: obj,
        deletedArray
    }
}
