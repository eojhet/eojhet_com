
export function SaveToken (token) {

  if (typeof window !== "undefined") {
    localStorage.setItem('token', JSON.stringify(token));
  }
}

export function GetToken () {

  if (typeof window !== "undefined") {
    let saved = localStorage.getItem('token');
    const token = JSON.parse(saved);
    return token || undefined;
  }
}