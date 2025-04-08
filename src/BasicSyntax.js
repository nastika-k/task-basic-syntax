export function romanToInteger(str) {
    let result = 0;
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < str.length; i++) {
        const current = romanMap[str[i]];
        const next = romanMap[str[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
}
