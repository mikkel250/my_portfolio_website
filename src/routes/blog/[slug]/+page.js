export async function load({ fetch, params }) {
    let article;
    try {
        article = await fetch(`https://dev.to/api/articles/mikkel250/${params.slug}`);
        article = await article.json();
    } catch (e) {
        console.log(e);
    }
    return {
        article
    };
}

// TO GET A SINGLE ARTICLE, YOU SHOULD BE ABLE TO USE:
// https://dev.to/api/articles/{username/organization}/{slug}
// YOU CAN GET THE SLUG FROM THE LIST OF BLOGS WHEN IT'S FETCHED ON THE BLOG PAGE, IT'S ONE OF THE JSON FIELDS
// E.G. 
// https://dev.to/api/articles/mikkel250/functions-in-sass-g9n
// to fetch the 'functions in SASS" article

// NOTE THAT IT MIGHT BE EASIEST TO USE MARKDOWN ON THE PORTFOLIO PAGE AS JAMES DID HERE (THE ARTICLE HAS BOTH BODY_HTML AND BODY_MARKDOWN FIELDS)
// https://dev.to/jameswallis/adding-a-blog-with-a-dev-to-backend-to-a-static-next-js-website-with-canonical-urls-1i9g


// thanks for Cheryl M for posting https://dev.to/cherylli/displaying-devto-articles-on-your-website-using-nextjs-1bbk