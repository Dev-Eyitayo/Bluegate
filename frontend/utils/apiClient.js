import API_BASE_URL from "../src/config/api";

/**
 * Universal API client
 * - JSON by default
 * - FormData (multipart) when `data instanceof FormData`
 * - Auto-401 logout
 * - Proper error messages
 */
export async function apiRequest(endpoint, method = "GET", data = null, token = null) {
  const authToken = token || localStorage.getItem("ACCESS_TOKEN");

  // Base headers – only add Content-Type for JSON
  const headers = {};
  if (authToken) headers["Authorization"] = `Bearer ${authToken}`;

  const options = { method, headers };

  // === BODY HANDLING ===
  if (data) {
    if (data instanceof FormData) {
      // Let browser set Content-Type + boundary
      options.body = data;
    } else {
      // JSON payload
      headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(data);
    }
  }

  // === FETCH ===
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

  // === RESPONSE PARSING ===
  const contentType = response.headers.get("content-type") || "";
  let result;
  if (contentType.includes("application/json")) {
    result = await response.json();
  } else {
    result = await response.text();
  }

  // === ERROR HANDLING ===
  if (!response.ok) {
    let message =
      typeof result === "object"
        ? result?.detail || result?.message || JSON.stringify(result)
        : result || `Request failed with status ${response.status}`;

    // Auto-logout on 401
    if (response.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER");
      // Optional: redirect to login
      window.location.href = "/admin/login";
    }

    throw new Error(message);
  }

  return result;
}