import React from "react";
import Buttons from "../../ui/Buttons";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    // fetcher form revalidate page without navigation
    <fetcher.Form method="PATCH" className="text-right">
      <Buttons type="primary">Make Priority</Buttons>;
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
