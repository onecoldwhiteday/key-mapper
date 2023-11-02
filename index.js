function keysToCamel(obj) {
    return objSwitchCase(obj, toCamelCase);
}

function keysToSnake(obj) {
    return objSwitchCase(obj, toSnakeCase);
}

function objSwitchCase(
    obj,
    switchStrCaseFn
) {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
        const updKey = switchStrCaseFn(key);
        Object.assign(newObj, { [updKey]: obj[key] });
    });
    return newObj;
}

function toSnake(key) {
    const keyCharsArr = key.split("").reduce((acc, char) => {
        if (char == char.toUpperCase()) {
            acc.push(`_${char.toLowerCase()}`);
            return acc;
        }
        acc.push(char);
        return acc;
    }, []);
    return keyCharsArr.join("");
}

function toCamel(key) {
    if (!key.length) return key;
    const keywordsArr = key.split("_");
    if (keywordsArr.length < 2) return key;

    let resultArr = [keywordsArr[0]];

    let i = 1;
    while (i < keywordsArr.length) {
        const keyword = keywordsArr[i];
        const capitalizedWord =
            keyword.charAt(0).toUpperCase() + keyword.slice(1, keyword.length);
        resultArr.push(capitalizedWord);
        i++;
    }
    return resultArr.join("");
}

module.exports = { keysToCamel, keysToSnake, toCamel, toSnake }