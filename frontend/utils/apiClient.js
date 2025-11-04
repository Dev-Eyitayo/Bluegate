import API_BASE_URL from "../src/config/api";

export async function apiRequest(endpoint, method = "GET", data = null, token = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) options.body = JSON.stringify(data);
  if (token) options.headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

  let result;
  const contentType = response.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    result = await response.json();
  } else {
    result = await response.text();
  }

  if (!response.ok) {
    // Try to extract a clear error message
    const message =
      typeof result === "object"
        ? result?.message || JSON.stringify(result)
        : result || `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return result;
}
