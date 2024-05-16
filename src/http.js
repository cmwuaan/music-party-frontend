export async function loginUser(data) {
  const response = await fetch('http://localhost:5000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to login');
  }

  return resData.message;
}
