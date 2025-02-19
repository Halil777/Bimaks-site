import { FC } from "react";
import Contact from "../../contact/Contact";

const FirstItem: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mt-10 mb-10">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="flex flex-col">
              <h1 className="text-[30px] font-[600]">
                MAKS GAZ TURBIN TEMIZLEYCHI
              </h1>
              <div className="flex mt-4 gap-[50px]">
                <img
                  className="w-52 h-32"
                  src="./images/atiksu-aritma02.jpeg"
                  alt="atiksu-aritma02"
                />
                <div className="flex flex-col gap-5">
                  <h1 className="font-[600]">URUN TANIMI</h1>
                  <h1 className="font-[600]">
                    MAKS GTS,
                    <span className="font-thin">
                      gaz türbinlerinin temizlenmesi ve korozyonun engellenmesi
                      için tasarlanmış konsantre, nötr temizleme sıvısıdır.
                      Tehlikesiz, su bazlı ve biyolojik olarak parçalanabilir
                      olup; korozif, yanıcı ve toksik olmayan Gaz Türbin
                      Kompresör temizleyicidir.
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-[50px]">
              <h1 className="font-[600] uppercase">kullanim alanlari</h1>
              <p className="text-gray-500">
                Gaz türbin kompresörlerinin on-line ve off-line temizliği için
                tasarlanmış özel bir üründür. On-line temizleme işlemi; gaz
                türbinlerindeki kirliliği önleyen en etkili yöntem olarak
                bilinmektedir.
              </p>
            </div>
            {/* Repeat this block for additional sections as needed */}
            <div className="flex flex-col gap-3 mt-[50px]">
              <h1 className="font-[600] uppercase">kullanim alanlari</h1>
              <p className="text-gray-500">
                Gaz türbin kompresörlerinin on-line ve off-line temizliği için
                tasarlanmış özel bir üründür. On-line temizleme işlemi; gaz
                türbinlerindeki kirliliği önleyen en etkili yöntem olarak
                bilinmektedir.
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstItem;
