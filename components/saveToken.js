

export default function SaveToken (token) {

  if (typeof window !== "undefined") {
    localStorage.setItem('token', JSON.stringify(token));
  }
}