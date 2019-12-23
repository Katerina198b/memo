export function cn(name: string) {
    return function (): string {
        let classnames: string[] = [];
        classnames.push(name);
        if (arguments.length === 0) {
            return classnames.join(' ');
        }
        [...arguments].forEach(arg => {
            if (typeof arg === 'string') {
                classnames.pop();
                classnames.push(`${name}__${arguments[0]}`)
            }
            console.log(typeof arg === 'object', arg, name);
            if (typeof arg === 'object') {
                Object.keys(arg).forEach(key => {
                    if (typeof arg[key] === 'boolean' && arg[key]) {
                        classnames.push(`${name}_${key}`);
                        return;
                    }
                    classnames.push(`${name}_${key}_${arg[key]}`)
                });
            }
            if (Array.isArray(arg)) {
                classnames.push(arg.join(' '))
            }
        });
        return classnames.join(' ')
    }
}

