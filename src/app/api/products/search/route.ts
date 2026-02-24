import z from "zod";
import { NextRequest } from "next/server";
import data from "../data.json";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const query = z.string().parse(searchParams.get("q"));

  console.log(query);

  const products = data.products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

  return Response.json(products);
}
