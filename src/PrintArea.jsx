import { useEffect, useState } from "react";

export default function PrintArea({ data }) {
  const [images, setImages] = useState([]);
  const maxPerPage = 6;
  const pagesData = [[]];
  for (
    let imageCounter = 0, pageCounter = 0;
    imageCounter < images.length;
    imageCounter++
  ) {
    if (pageCounter === maxPerPage) {
      pagesData.push([]);
      pageCounter = 0;
    }
    pagesData[pagesData.length - 1].push(images[imageCounter]);
    pageCounter += 1;
  }

  useEffect(() => {
    Promise.all(data.map(getImageUrl)).then((values) => setImages(values));
  }, [data]);

  return (
    <section id="print-area" className="hidden">
      {images.length &&
        pagesData.map((pageData, index) => (
          <PrintPage key={index} data={pageData} />
        ))}
    </section>
  );
}

function PrintPage({ data }) {
  return (
    <div className="print-page">
      {data.map((item, index) => (
        <img key={index} src={item} />
      ))}
    </div>
  );
}

function getImageUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
  });
}
