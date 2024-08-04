"use server";

export default async function ThemeParamsPage() {
  const x = await fetch("http://127.0.0.1:3000/api/test");
  const v = await x.json();
  return <>asdf:{v.name}</>;
}
