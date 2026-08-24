// import type { Metadata } from "next";

// export async function generateMetadata(
//     props: PageProps<"/blog/[id]">,
// ): Promise<Metadata> {
//     const { id } = await props.params;

//     try {
//         const post = await getBlogPost(id);
//         return { title: post.title, description: post.description};
//     } catch {
//         return { title: "Blog post ikke fundet", description: "Blog post ikke fundet" };
//     }
// }

export default async function BlogPostPage({}) {
    return (
        <>
        blog indlæg side
        </>
    )
}