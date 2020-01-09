export function cn(name: string) {
    return function (): string {
        let elName = name;
        let classnames: string[] = [];
        classnames.push(name);
        if (arguments.length === 0) {
            return classnames.join(' ');
        }
        [...arguments].forEach(arg => {
            if (typeof arg === 'string') {
                classnames.pop();
                elName = `${name}__${arguments[0]}`;
                classnames.push(elName)
            }
            if (Array.isArray(arg)) {
                classnames.push(arg.join(' '));
                return;
            }
            if (typeof arg === 'object') {
                Object.keys(arg).forEach(key => {
                    if (typeof arg[key] === 'boolean' && arg[key]) {
                        classnames.push(`${elName}_${key}`);
                        return;
                    }
                    classnames.push(`${elName}_${key}_${arg[key]}`)
                });
            }
        });
        return classnames.join(' ')
    }
}

