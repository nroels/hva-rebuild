export function getStrapiMedia(url) {
    if (url == null) return null;

    if (url.startsWith('/')) {
        return `${import.meta.env.STRAPI_URL}${url}`;
    }

    return url;
}

export async function fetchApi({
    endpoint,
    query,
    wrappedByKey,
    wrappedByList,
    page
}) {
    if (endpoint.startsWith('/')) {
        endpoint = endpoint.slice(1);
    }

    const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });
    }

    if (page) {
        url.searchParams.append(`populate[${page}][populate]`, '*');
    } else {
        url.searchParams.append('populate', '*');
    }

    const res = await fetch(url.toString());
    let data = await res.json();

    if (wrappedByKey) {
        data = data[wrappedByKey];
    }

    if (wrappedByList) {
        data = data[0];
    }

    return data;
}

