const pictures = [
  "./Resource/images/PXL_20250530_124812330~2.jpg",
  "./Resource/images/PXL_20250818_064236182 (2).jpg",
  "./Resource/images/PXL_20250424_051820308 (1)~2.jpg",
  "./Resource/images/PXL_20250906_075946277.jpg",
  "./Resource/images/PXL_20251103_102247080 (2).jpg",
  "./Resource/images/20241120165911~2 (1)~2.jpg",
];

const gallery = document.querySelector(".gallery");

pictures.forEach(pic => {
    const img = document.createElement("img");
    img.src = pic;
    gallery.appendChild(img);
});