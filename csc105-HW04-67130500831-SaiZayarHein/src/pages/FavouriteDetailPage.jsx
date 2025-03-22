import React from "react";
import { useParams, useSearchParams } from "react-router";

const FavouriteDetailPage = () => {
  const { favId } = useParams();
  const [searchParams] = useSearchParams();

  return (
    <>
      <p>
        Your favourite post is <b>{searchParams.get("q")}</b>. Post ID is{" "}
        <b>{favId}</b>. Size is <b>{searchParams.get("size")}</b>.
      </p>
    </>
  );
};

export default FavouriteDetailPage;
