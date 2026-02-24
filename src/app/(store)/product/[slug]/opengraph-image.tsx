import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { env } from "@/env";
import { ImageResponse } from "next/og";

export const alt = "Produto";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60,
    },
  });

  const product = await response.json();

  return product;
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  const productImageURL = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={productImageURL} alt="" style={{ width: "100%" }} />
    </div>,
  );
}
