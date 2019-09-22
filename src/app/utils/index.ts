const publicKey = '9b5e63f935b69c8f68b5cedf54c97a81'
const hash = '2e8ed0d1737174b673ae2b52c756e801';

export const url = (urlpath: string, query: string = ''): string => `
https://gateway.marvel.com/v1/public
${urlpath}
?apikey=${publicKey}
&hash=${hash}
&ts=1
${query}
`;

export const isEmpty = (value: any): any => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
}

export const removeDuplicates = (arr: any): any[] => {
    // Removing duplicate objects from list
    const seen = new Set();
    const filteredList = arr.filter((el: any) => {
        const duplicate = seen.has(el.id);
        seen.add(el.id);
        return !duplicate;
    });

    return filteredList;
}


