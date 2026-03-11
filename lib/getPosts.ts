export async function getPosts(category?: number) {

    let url = "https://wpa.echoesofzero.net/wp-json/wp/v2/posts?_embed&per_page=100";

    if (category) {
        url += `&categories=${category}`;
    }

    const res = await fetch(url, {
        next: { revalidate: 60 }
    });

    if (!res.ok) {
        throw new Error("Failed to fetch posts from API");
    }

    return res.json();
}