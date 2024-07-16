import "./GalleryPost.css"
import image40 from "../../images/image40.jpg"
import image37 from "../../images/image37.jpg"
import image50a from "../../images/image50a.jpg"
import image36 from "../../images/image36.jpg"
import image2 from "../../images/image2.jpg"
import image4 from "../../images/image4.jpg"
import image11 from "../../images/image11.jpg"
import image34 from "../../images/image34.jpg"

function GalleryPost() {
  return (
    <div class="album">
      <div class="responsive-container-block bg">
        <div class="responsive-container-block img-cont">
          <img
            class="img imgSide"
            src={image2}
          />
          <img
            class="img imgSide"
            src={image50a}
          />
          <img
            class="img img-last imgSide"
            src={image11}
          />
        </div>
        <div class="responsive-container-block img-cont">
          <img
            class="img img-big imgMiddle"
            src={image40}
          />
          <img
            class="img img-big img-last imgMiddle"
            src={image37}
          />
        </div>
        <div class="responsive-container-block img-cont">
          <img
            class="img imgSide"
            src={image4}
          />
          <img
            class="img imgSide"
            src={image34}
          />
          <img
            class="img imgSide"
            src={image36}
          />
        </div>
      </div>
    </div>
  )
}

export default GalleryPost