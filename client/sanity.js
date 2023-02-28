import { SanityClient } from "@sanity/client";
import { createClient } from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url";
export const client = createClient({
    projectId: 'lmtrfu4m',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2022-01-12",
});

// const builder = ImageUrlBuilder(client)
// export const urlFor = (source) => builder.image(source)


// Run this to add exception for localhost 3333 CORS policy
// Sanity cors add http://localhost:3333