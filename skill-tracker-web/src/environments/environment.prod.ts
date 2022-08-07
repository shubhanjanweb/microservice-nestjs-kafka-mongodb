export const environment = {
  production: false,
  apiBaseUrl: (window as { [key: string]: any })["env"]["apiUrl"],
  debug: false
};
