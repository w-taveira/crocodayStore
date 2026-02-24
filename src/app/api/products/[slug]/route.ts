import z from "zod";
import data from "../data.json";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const getParams = await params;
  const slug = z.string().parse(getParams.slug);

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json({ mesage: "product not found!" }, { status: 400 });
  }

  return Response.json(product);
}
