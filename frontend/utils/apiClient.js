// utils/apiClient.js
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

  const headers = {};
  if (authToken) headers["Authorization"] = `Bearer ${authToken}`;

  const options = { method, headers };

  // === BODY HANDLING ===
  if (data) {
    if (data instanceof FormData) {
      options.body = data;
    } else {
      headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(data);
    }
  }

  // === FETCH ===
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

  // === RESPONSE PARSING ===
  const contentType = response.headers.get("content-type") || "";
  let result = null;

  // Only try to parse JSON if content-type is JSON
  if (contentType.includes("application/json")) {
    try {
      result = await response.json();
    } catch {
      result = null;
    }
  } else if (response.status !== 204) {
    // For non-JSON, non-204 responses
    result = await response.text();
  }
  // For 204: result stays null → perfect

  // === SUCCESS: 200–299 OR 204 ===
  if (response.ok || response.status === 204) {
    return result; // null for 204, parsed JSON or text otherwise
  }

  // === ERROR HANDLING ===
  let message =
    typeof result === "object"
      ? result?.detail || result?.message || JSON.stringify(result)
      : result || `Request failed with status ${response.status}`;

  // Auto-logout on 401
  if (response.status === 401) {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER");
    window.location.href = "/admin/login";
  }

  const error = new Error(message);
  error.status = response.status;
  throw error;
}