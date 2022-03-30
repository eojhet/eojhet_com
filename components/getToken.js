

export default function GetToken () {

  if (typeof window !== "undefined") {
    let saved = localStorage.getItem('token');
    const token = JSON.parse(saved);
    return token || undefined;
  }
}