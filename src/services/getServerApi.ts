import axios from "axios";

export function getServerApi(ctx?: any) {
  //user token
  //const { "tokenName": token } = parseCookies(ctx);

  //create api
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  //set api headers
  api.defaults.headers.common.Accept = "application/json";
  api.defaults.headers.post["Content-Type"] = "application/json";

  //set default api header
  //   if (token) {
  //     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //   }

  //logoff user if token expire
  api.interceptors.response.use((response) => {
    if (process.env.NODE_ENV === "development")
      console.log(response.config.url, response);

    // if (response.status === 401) {
    //   destroyCookie(null, "tokenName", {
    //     path: "/",
    //   });
    // }

    return response;
  });

  return api;
}
