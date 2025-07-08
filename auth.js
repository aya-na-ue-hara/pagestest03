// auth.js
let auth0 = null;

async function initAuth0() {
  auth0 = await createAuth0Client({
    domain: "asahig-b2bplatform-dev.jp.auth0.com", // 例: dev-xxxxxx.us.auth0.com
    client_id: "FyZhK4kUR7gFsJ9P5vXubO9rJsXBIneb",
    redirect_uri: window.location.origin + "/pagestest03/callback.html"
  });
}
