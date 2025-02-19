import { FC } from "react";

const ProductGroups: FC = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      title: "Product 1",
      image: "/images/tersosmoz01.jpeg",
      link: "/product1",
    },
    {
      id: 2,
      title: "Product 2",
      image: "/images/tersosmoz01.jpeg",
      link: "/product2",
    },
    {
      id: 3,
      title: "Product 3",
      image: "/images/tersosmoz01.jpeg",
      link: "/product3",
    },
    {
      id: 4,
      title: "Product 4",
      image: "/images/tersosmoz01.jpeg",
      link: "/product4",
    },
    {
      id: 2,
      title: "Product 2",
      image: "/images/tersosmoz01.jpeg",
      link: "/product2",
    },
    {
      id: 3,
      title: "Product 3",
      image: "/images/tersosmoz01.jpeg",
      link: "/product3",
    },
    {
      id: 4,
      title: "Product 4",
      image: "/images/tersosmoz01.jpeg",
      link: "/product4",
    },
  ];

  return (
    <div className="container mx-auto py-8 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-center mb-7">Product Groups</h1>
      <p className="text-center mb-10">
        We are proud to present our high-performance products that were
        developed according to the latest technology.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {product.title}
              </h2>
              <a
                href={product.link}
                className="text-blue-500 hover:underline dark:text-blue-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGroups;
