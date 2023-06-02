function expandedForm(num) {
    return String(num)
        .split('')
        .reverse()
        .map((el, i) => el > 0 ? el + '0'.repeat(i) : null)
        .reverse().filter(el => el != null)
        .join(' + ')
}

console.log(expandedForm(70304))
