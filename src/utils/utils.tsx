export function getImageHref(name: string, extension: string) {
    return new URL(`../assets/${name}.${extension}`, import.meta.url).href
}

export function getImage(name: string, extension: string) {
    return new URL(`../assets/${name}.${extension}`, import.meta.url).pathname.replace('/src', '.')
}