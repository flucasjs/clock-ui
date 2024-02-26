export async function getTimeData() {
  const res = await fetch(process.env.API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getQuotesData({
  limit = 5,
  minLength = 100,
  maxLength = 150,
} = {}) {
  const url = `${new URL(
    "/quotes/random",
    "https://api.quotable.io"
  )}?${new URLSearchParams({limit, minLength, maxLength})}`;

  const res = await fetch(url, { next: { revalidate: 1 } });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}
