import { useRouter } from "next/router";
import React from "react";

export default function Produto() {
  const router = useRouter();
  console.log(router.query);
  const { produto } = router.query;
  return (
    <div>
      <p>{produto}</p>
    </div>
  );
}
