export async function getPosts() {

    const res = await fetch(

        "https://wpa.echoesofzero.net/wp-json/wp/v2/posts?_embed",
        {
            next: { revalidate: 1 } //Change to 60
        }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch posts from API")
    }

    return res.json()
}