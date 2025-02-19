import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface ProductItem {
  id: number;
  name_tm: string;
  name_en: string;
  name_ru: string;
  image: string;
}

const HomeProducts: FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://bimakstm.com/api/product-group"
        );
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const getTitleByLanguage = (item: ProductItem) => {
    switch (i18n.language) {
      case "en":
        return item.name_en;
      case "ru":
        return item.name_ru;
      case "tm":
        return item.name_tm;
      default:
        return item.name_ru;
    }
  };

  const moreByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "Review Products";
      case "ru":
        return "Обзорная продукция";
      case "tm":
        return "Обзорная продукция";
      default:
        return "Обзорная продукция";
    }
  };

  return (
    <div className="mt-20 mb-5 w-full">
      <div className="grid gap-5 grid-cols-12">
        {products.map((item) => (
          <div
            key={`product_item_${item.id}`}
            className="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6 rounded bg-white overflow-hidden shadow-lg hover:cursor-pointer"
          >
            <img className="w-full h-60" src={item.image} alt="Card" />
            <div className="px-6 py-4 flex flex-col flex-grow">
              <div className="font-bold text-xl mb-2 text-center h-20">
                {/* {item.name_en} */}
                {getTitleByLanguage(item)}
                {/* Change to the appropriate language key if needed */}
              </div>
              <div className="mt-auto">
                <button
                  className="bg-blue-500 px-4 py-2 w-full text-white hover:bg-blue-600 rounded-[6px]"
                  onClick={() => navigate(`/products/${item.id}`)} // Ensure groupId is correct
                >
                  {moreByLanguage()}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
