export async function load({ fetch }) {
    let blogposts;

    try {
        blogposts = await fetch(`https://dev.to/api/articles?username=mikkel250`);
        blogposts = await blogposts.json();
        blogposts = blogposts.reverse();    
    } catch (e) {
        console.log(`error! loading placeholder data instead...Error: ${e}`);
        // try to load the placeholder data instead
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const blogposts = await res.json();
        return {
            blogposts
        };
    }
    return {
        blogposts
    };
}

// Dummy placeholder data
// export const load = async ({fetch}) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const blogposts = await res.json();
//   return {
//       blogposts
//   }
// }
