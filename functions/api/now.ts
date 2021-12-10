export async function onRequestGet(request) {
    return new Response(new Date().toISOString());
}