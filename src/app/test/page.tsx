"use client";

import { HELLO_QUERY } from "@/services/apollo/queries/hello-queries";
import { useQuery } from "@apollo/client/react";

export default function TestPage() {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const helloData = data as { hello: { message: string } };
  return <h1>{helloData.hello.message}</h1>;
}