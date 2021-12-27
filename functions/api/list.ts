export async function onRequestGet(context) {
    const {
      request,
      env,
      params,
    } = context;

    const url = "https://getpocket.com/v3/get";
    const obj = {
        consumer_key: env.CONSUMER_KEY,
        access_token: env.ACCESS_CODE,
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
    // const response = fetch(url, {method, headers, body});
    const response = new Response(JSON.stringify(obj));
    return response;
}