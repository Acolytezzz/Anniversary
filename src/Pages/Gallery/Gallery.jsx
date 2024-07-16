import GalleryPost from "../../Components/GalleryPost/GalleryPost";
import "./Gallery.css";
import Carousel from "../../Components/Carousel/Carousel";

function Gallery() {
  return (
    <div className="gallery">
      <Carousel />
      <GalleryPost />
    </div>
  );
}

export default Gallery;
