const BASE_URL = 'http://localhost:8080/asset';
const TIMEOUT_MS = 10000;

const fetchWithTimeout = (url, options = {}) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  return fetch(url, { ...options, signal: controller.signal })
    .then((res) => { clearTimeout(timer); return res; })
    .catch((err) => {
      clearTimeout(timer);
      if (err.name === 'AbortError') {
        throw new Error('Request timed out. Please check if the backend server is running.');
      }
      if (err.message === 'Failed to fetch') {
        throw new Error('Cannot reach backend server at localhost:8080. Please ensure the Spring Boot application is running.');
      }
      throw err;
    });
};

export const addAssetItem = async (assetItemBean) => {
  const response = await fetchWithTimeout(`${BASE_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(assetItemBean),
  });
  if (!response.ok) {
    throw new Error(`Failed to add asset (HTTP ${response.status}).`);
  }
  return response.json();
};

export const getAllAssetItems = async () => {
  const response = await fetchWithTimeout(`${BASE_URL}/all`);
  if (!response.ok) {
    throw new Error(`Failed to fetch assets (HTTP ${response.status}).`);
  }
  return response.json();
};
