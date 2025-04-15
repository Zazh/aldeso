// routes/+layout.js
export async function load({ url }) {
    return {
        isHome: url.pathname === '/'
    };
}
