const env = import.meta.env;

const isDev = env.DEV;
const isSsr = env.SSR;

export { isDev, isSsr };
