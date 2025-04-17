// routes/+layout.js
// src/routes/+layout.ts
export async function load({ url }) {
    return {
        isHome: url.pathname === '/'
    };
}
