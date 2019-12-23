declare module '*.svg?inline' {
    const inlineSvg: {
        id: string;
        viewBox: string;
        content: string;
    };

    export default inlineSvg;
}
