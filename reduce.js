const reduce = function(list, callback, initialValue) {
    let total = initialValue;
    for(let i = 0; i < list.length; i++) {
        total = callback(total, list[i]); // same as total = total + list[i] or total = (total[list[i]] || 0) + 1
    }
    return total;
}

const sum = function(list) {
    function addition(total, val) {
        return total + val;
    }
    return reduce(list, addition, 0);
}


sum([1,2,3,4]);

const countWords = wordList =>  {
    return reduce(wordList, (result, word) => {
        result[word] = (result[word] || 0 ) + 1 //
        return result
    }, {})
}
countWords(['hello', 'world', 'dogs', 'hello'])
