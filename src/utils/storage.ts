const KEY = "finance-dashboard-data";

export function saveToStorage(data: any) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function loadFromStorage() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : null;
}