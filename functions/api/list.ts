export async function onRequestGet(request) {
    const url = "https://getpocket.com/v3/get";
    const obj = {
        consumer_key: "****",
        access_token: "****",
        state: "unread",
        count: 10,
        offset: 0,
        sort: "newest",
        detailType: "complete"
    };
    const method = "POST";
    const body = Object.keys(obj).map((key)=>key+"="+encodeURIComponent(obj[key])).join("&");
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    };
    const response = fetch(url, {method, headers, body});
    return response;
}