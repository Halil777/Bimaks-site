import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ProductItem {
  id: number;
  title_tm: string;
  title_en: string;
  title_ru: string;
  short_tm: string;
  short_en: string;
  short_ru: string;
  desc_tm: string;
  desc_en: string;
  desc_ru: string;
  image: string;
}

const ProductFullInfo: FC = () => {
  const location = useLocation();
  const { product } = location.state as { product: ProductItem };
  const { i18n } = useTranslation();

  if (!product) return <div>No product data</div>;

  const getTitleByLanguage = (item: ProductItem) => {
    switch (i18n.language) {
      case "en":
        return item.title_en;
      case "ru":
        return item.title_ru;
      case "tm":
        return item.title_tm;
      default:
        return item.title_en; // Fallback to English if the language is unknown
    }
  };

  const getShortDescriptionByLanguage = (item: ProductItem) => {
    switch (i18n.language) {
      case "en":
        return item.short_en;
      case "ru":
        return item.short_ru;
      case "tm":
        return item.short_tm;
      default:
        return item.short_en;
    }
  };

  const getDescriptionByLanguage = (item: ProductItem) => {
    switch (i18n.language) {
      case "en":
        return item.desc_en;
      case "ru":
        return item.desc_ru;
      case "tm":
        return item.desc_tm;
      default:
        return item.desc_en;
    }
  };

  return (
    <div className="px-[10%] my-10 dark:text-black">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-5">
            {getTitleByLanguage(product)}
          </h1>
          <div className="flex gap-10">
            <div className="flex flex-col gap-5 w-full">
              {/* Uncomment the image section if needed */}
              {/* <img
                src={product.image}
                className="w-full lg:w-1/2"
                alt={getTitleByLanguage(product)}
              /> */}
              <p className="text-lg">
                {getShortDescriptionByLanguage(product)}
              </p>
            </div>
          </div>
          <div className="my-12">
            <div
              dangerouslySetInnerHTML={{
                __html: getDescriptionByLanguage(product),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFullInfo;
