import "./FuturePost.css";
import image17 from "../../images/image17.jpg";
import image15 from "../../images/image15.JPG";
import image47 from "../../images/image47.jpg";

function FuturePost() {
  return (
    <>
      <div className="futureDesktop">
        <div className="futurePost">
          <div className="futurePostWrapper">
            {/* <img
          src={image17}
          alt="cutieeee"
          className="futurePostImage"
          /> */}
            <h1 className="futurePostTitle">
              OUR FUTURE TOGETHER
              <div className="futurePostEdit">
                <i className="futurePostIcon fa-solid fa-pen-to-square"></i>
                <i className="futurePostIcon fa-solid fa-heart"></i>
              </div>
            </h1>
            <div className="futurePostInfo">
              <span className="futurePostAuthor">
                Author: <b>Aman</b>
              </span>
              <span className="futurePostDate">Written with Love</span>
            </div>
            {/* <p className="futurePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae officiis voluptate eveniet expedita? Optio repellat hic temporibus perferendis? Omnis iusto culpa facere, repudiandae porro nemo explicabo doloremque nostrum commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae officiis voluptate eveniet expedita? Optio repellat hic temporibus perferendis? Omnis iusto culpa facere, repudiandae porro nemo explicabo doloremque nostrum commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae officiis voluptate eveniet expedita? Optio repellat hic temporibus perferendis? Omnis iusto culpa facere, repudiandae porro nemo explicabo doloremque nostrum commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae officiis voluptate eveniet expedita? Optio repellat hic temporibus perferendis? Omnis iusto culpa facere, repudiandae porro nemo explicabo doloremque nostrum commodi.</p> */}
            <div className="futureRow">
              <div className="futureColumn futureColumnText">
                <h3 className="futurePostHead">Forever Love</h3>
                <p className="futurePostDesc">
                  Looking ahead fills my heart with joy and anticipation. I
                  envision a future where our love continues to grow stronger
                  each day. Priya, you are my everything, and I cherish the love
                  we share deeply. I vow to always hold your hand, supporting
                  you through every twist and turn of life's journey. My
                  greatest aspiration is to give you the world, because you
                  deserve nothing less.
                </p>
              </div>
              <div className="futureColumn">
                <img
                  src={image15}
                  alt="cutieeee"
                  className="storyPostImgColumn"
                />
              </div>
            </div>
            <div className="futureRow">
              <div className="futureColumn">
                <img
                  src={image47}
                  alt="cutieeee"
                  className="storyPostImgColumn"
                />
              </div>
              <div className="futureColumn futureColumnText">
                <h3 className="futurePostHead">Our Journey Together</h3>
                <p className="futurePostDesc">
                  As we celebrate our first year together, I am filled with
                  excitement for the decades ahead. We have 80 more years to
                  create endless memories, embark on new adventures, and cherish
                  each other's company. Priya, your love is my greatest
                  treasure, and I am committed to nurturing and cherishing it
                  forever. With you, I am the happiest and most fulfilled.
                  Here's to our future, filled with love, happiness, and endless
                  possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="futureMobile">
        <div className="futurePost">
          <div className="futurePostWrapper">
            <h1 className="futurePostTitle">
              OUR FUTURE TOGETHER
              <div className="futurePostEdit">
                <i className="futurePostIcon fa-solid fa-pen-to-square"></i>
                <i className="futurePostIcon fa-solid fa-heart"></i>
              </div>
            </h1>
            <div className="futurePostInfo">
              <span className="futurePostAuthor">
                Author: <b>Aman</b>
              </span>
              <span className="futurePostDate">Written with Love</span>
            </div>

            {/* First Section */}
            <div className="futureColumnText">
              <h3 className="futurePostHead">Forever Love</h3>
              <p className="futurePostDesc">
                Looking ahead fills my heart with joy and anticipation. I
                envision a future where our love continues to grow stronger each
                day. Priya, you are my everything, and I cherish the love we
                share deeply. I vow to always hold your hand, supporting you
                through every twist and turn of life's journey. My greatest
                aspiration is to give you the world, because you deserve nothing
                less.
              </p>
            </div>
            <img src={image15} alt="cutieeee" className="futurePostImgColumn" />

            {/* Second Section */}
            <div className="futureColumnText">
              <h3 className="futurePostHead">Our Journey Together</h3>
              <p className="futurePostDesc">
                As we celebrate our first year together, I am filled with
                excitement for the decades ahead. We have 80 more years to
                create endless memories, embark on new adventures, and cherish
                each other's company. Priya, your love is my greatest treasure,
                and I am committed to nurturing and cherishing it forever. With
                you, I am the happiest and most fulfilled. Here's to our future,
                filled with love, happiness, and endless possibilities.
              </p>
            </div>
            <img src={image47} alt="cutieeee" className="futurePostImgColumn" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FuturePost;
