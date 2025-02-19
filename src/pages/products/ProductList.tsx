import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface ProductItem {
  id: number;
  title_tm: string;
  title_en: string;
  title_ru: string;
  short_tm: string;
  short_en: string;
  short_ru: string;
  image: string;
}

const ProductList: FC = () => {
  const navigate = useNavigate();
  const { groupId } = useParams<{ groupId: string }>();
  const { i18n } = useTranslation();
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!groupId) return; // Exit if no groupId provided

      try {
        const response = await axios.get(
          `https://bimakstm.com/api/product/product-by-group?group=${groupId}`
        );
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [groupId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const getTitleByLanguage = (item: ProductItem) => {
    switch (i18n.language) {
      case "en":
        return item.title_en;
      case "ru":
        return item.title_ru;
      case "tm":
        return item.title_tm;
      default:
        return item.title_ru;
    }
  };

  const getSubtitleByLanguage = (item: ProductItem) => {
    switch (i18n.language) {
      case "en":
        return item.short_en;
      case "ru":
        return item.short_ru;
      case "tm":
        return item.short_tm;
      default:
        return item.short_ru;
    }
  };

  const getProductDetailByLanguage = () => {
    switch (i18n.language) {
      case "en":
        return "Product Detail";
      case "ru":
        return "Детали продукта";
      case "tm":
        return "Product Detail";
      default:
        return "Детали продукта";
    }
  };

  return (
    <div className="px-[10%] my-10">
      <div className="grid h-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() =>
              navigate(`/product-info/${product.id}`, { state: { product } })
            }
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer relative"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={getTitleByLanguage(product)}
                className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="p-5 mb-14">
              {/* Add bottom padding to ensure space for button */}
              <h2 className="text-xl text-center font-bold mb-2">
                {getTitleByLanguage(product)}
              </h2>
              <p className="text-center text-[14px]">
                {getSubtitleByLanguage(product)}
              </p>
              <div className="absolute bottom-5 left-0 right-0 mx-4">
                {/* Positioned at the bottom with margin */}
                <button className="bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300 w-full">
                  {getProductDetailByLanguage()}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
