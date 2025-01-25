export interface News {
    author: string,
    content: string,
    description: string,
    publishedAt: Date,
    source: {
        id?: '',
        name: string
    }
    title: string,
    url: string,
    urlToImage: string,
}