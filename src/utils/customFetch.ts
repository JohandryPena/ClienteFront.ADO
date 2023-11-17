
import storage from "../helpers/storageServices";

interface FetchOptions {
  method?: string;
  headers?: Headers | Record<string, string>;
  body?: BodyInit | null;
}

const updateHeader = (options: FetchOptions) => {
  const session = storage.getItem('session', true)
  const token = `Bearer ${session.token}`
  const newHeaders = { Authorization: token }
  options.headers = { ...newHeaders, ...options.headers }
  return options
}

const customFetch = async (url: string, options: FetchOptions, notToken = false) => {
  let response;

  try {
    options.headers = { ...options.headers, 'Content-Type': 'application/json', }
    if ((!url?.includes('notToken') && !notToken) && options)
      options = updateHeader(options)

    response = await fetch(url, options);
    if (!response.ok)
      throw new Error(`Fetch error: ${response.status} ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default customFetch;