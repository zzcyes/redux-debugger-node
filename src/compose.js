function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

function composeReducer(...funcs) {
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

const func = (arg) => console.debug(`这里是函数func，arg：(${arg})`)

compose(func)('这里是传参~');

composeReducer(func)('这里是传参~');