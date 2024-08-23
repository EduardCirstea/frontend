import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { user } = useSelector((state) => state.user);

  return <div>home</div>;
}
