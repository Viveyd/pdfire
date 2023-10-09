import { useEffect, useRef, useState } from "react";

export default function PrintArea({ data }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    Promise.all(data.map(getImageUrl)).then((values) => setImages(values));
  }, [data]);

  return (
    <section id="print-area" className="hidden">
      {images.length &&
        images.map((item, index) => <img key={index} src={item} />)}
    </section>
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
