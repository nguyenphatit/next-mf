import { getProducts, Product } from "@/utils/api";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

interface Props {
  products: Product[];
}

const ProductsListingPage = dynamic(() =>
  import("@/components/products-listing-page").then(
    (mod) => mod.ProductsListingPage
  )
);

export default function Products({ products }: Props) {
  return (
    <main className="flex flex-col p-20">
      <ProductsListingPage products={products} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
};
