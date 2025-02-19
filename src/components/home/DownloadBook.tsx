import { FC } from "react";

const DownloadBook: FC = () => {
  const onButtonClick = () => {
    const pdfUrl = "Sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-24 flex flex-col gap-4 mb-5">
      <h1 className="text-blue-400 text-[40px] font-[600]">Biz barada</h1>
      <p className="text-gray-400  ">
        2006-njy ýylda döredilen Bimaks türk kompaniýasy ýokary hilli, ýokary
        öndürijilikli suw arassalaýyş önümleri, nebit-gaz we senagat pudaklary
        üçin niýetlenen himiki serişdeleri öndürýär. Bimaks öz pudagynda
        öňdebaryjy kompaniýa bolup, ösýän tehnologiýalara laýyklykda
        barlaglaryny we gazanan üstünliklerini dowam edýär. Müşderiniň
        talaplaryna görä oýlanyşykly we amaly çözgütleri hödürleýär.Kompaniýanyň
        maksady wagtynda amala aşyrylýan we iň amatly bahaly hyzmatlaryny we
        önümlerini üpjün etmekden ybarat: Bug gazan suwyny arassalamak, sowadyjy
        suwyny arassalamak, ters osmos ulgamlar, arassalaýjy we
        zyýansyzlandyryjy serişdeler, lagym suwyny arassalamak, gaz turbinalary
        arassalaýjy serişdeler. Bimaks söwda belgisi hil sözüniň manydaşydyr.
      </p>
      <button
        onClick={onButtonClick}
        className="bg-blue-400 rounded-lg px-5 py-2 text-white w-44"
      >
        Katalogy yuklemek
      </button>
    </div>
  );
};

export default DownloadBook;
