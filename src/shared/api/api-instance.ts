class ApiError extends Error {
  constructor(public response: Response) {
    super("ApiError: " + response.status);
  }
}

export const jsonApiInstance = async <T>(url: string, init?: RequestInit) => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, {
    ...init,
  });

  if (!result.ok) {
    throw new ApiError(result);
  }

  const data = (await result.json()) as Promise<T>;

  return data;
};
