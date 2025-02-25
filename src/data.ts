const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
const api_key =
  "live_kbKaMUvksQaLngmpVOgjEQNncf1hoStreb16Cb09h2hNylIEbT5HVWIbjWRT7Pns";

export const fetchCatImages = async (): Promise<Cats[]> => {
  const response = await fetch(url, {
    headers: {
      "x-api-key": api_key,
    },
  });

  const data = await response.json();
  return data;
};

export type Cats = {
  id: string;
  url: string;
  name: string;
}

