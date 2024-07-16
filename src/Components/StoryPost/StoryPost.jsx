import "./StoryPost.css";
import image5 from "../../images/image5.jpg";
import image45 from "../../images/image45.jpg";
import image19 from "../../images/image19.jpg";

function StoryPost() {
  return (
    <>
      <div className="storyDesktop">
        <div className="storyPost">
          <div className="storyPostWrapper">
            {/* <img
          src={image17}
          alt="cutieeee"
          className="storyPostImage"
          /> */}
            <h1 className="storyPostTitle">
              OUR STORY
              <div className="storyPostEdit">
                <i className="storyPostIcon fa-solid fa-pen-to-square"></i>
                <i className="storyPostIcon fa-solid fa-heart"></i>
              </div>
            </h1>
            <div className="storyPostInfo">
              <span className="storyPostAuthor">
                Author: <b>Aman</b>
              </span>
              <span className="storyPostDate">Written with Love</span>
            </div>
            <div className="storyRow">
              <div className="storyColumn storyColumnText">
                <h3 className="storyPostHead">A Love Journey</h3>
                <p className="storyPostDesc">
                  Our love story began in a place far from home. We both came to
                  Australia with full of dreams and building a new life. We
                  fisrt met at IGA Preston, where we both worked. It was a love
                  at first sight and our connection only grew stronger from
                  there. Our first official date was at Melbourne Central. We
                  dined at a cozy Korean restaurant, enjoyed a few drinks, and
                  spent a magical evening by the river.
                </p>
              </div>
              <div className="storyColumn">
                <img
                  src={image5}
                  alt="cutieeee"
                  className="storyPostImgColumn"
                />
              </div>
            </div>
            <div className="storyRow">
              <div className="storyColumn">
                <img
                  src={image45}
                  alt="cutieeee"
                  className="storyPostImgColumn"
                />
              </div>
              <div className="storyColumn storyColumnText">
                <h3 className="storyPostHead">Getting to Know Each Other</h3>
                <p className="storyPostDesc">
                  Our relationship became official on July 28, 2023, and since
                  then, our bond has only grown stronger. Like any couple, we’ve
                  had our challenges. Sometimes my ego and her temper clashed,
                  but we always overcame these hurdles together. Priya has stood
                  by me through thick and thin, even when I wasn’t at my best.
                  Priya is an amazing person—energetic, sweet, kind, and, most
                  importantly, she loves me deeply.
                </p>
              </div>
            </div>
            <div className="storyRow">
              <div className="storyColumn storyColumnText">
                <h3 className="storyPostHead">Adventures Together</h3>
                <p className="storyPostDesc">
                  We love to travel and explore new places. From spontaneous
                  road trips along the coast to immersing ourselves in local
                  culture, every journey with Priya is an adventure. She’s a bit
                  wild and spontaneous, while I’m more calm and steady. Priya’s
                  vibrant emotions can swing from happy to enthusiastic, playful
                  to adorable, and thoughtful to excited in a matter of seconds.
                  Despite our different temperaments, we complement each other
                  perfectly. Her spontaneity brings excitement and joy to our
                  lives, while my calmness provides balance and stability.
                  Together, we create a harmonious blend that makes our
                  relationship strong and dynamic.
                </p>
              </div>
              <div className="storyColumn">
                <img
                  src={image19}
                  alt="cutieeee"
                  className="storyPostImgColumn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="storyMobile">
        <div className="storyPost">
          <div className="storyPostWrapper">
            {/* First Section */}
            <div className="storyColumnText">
              <h1 className="storyPostTitle">
                OUR STORY
                <div className="storyPostEdit">
                  <i className="storyPostIcon fa-solid fa-pen-to-square"></i>
                  <i className="storyPostIcon fa-solid fa-heart"></i>
                </div>
              </h1>
              <div className="storyPostInfo">
                <span className="storyPostAuthor">
                  Author: <b>Aman</b>
                </span>
                <span className="storyPostDate">Written with Love</span>
              </div>
              <h3 className="storyPostHead">A Love Journey</h3>
              <p className="storyPostDesc">
                Our love story began in a place far from home. We both came to
                Australia with full of dreams and building a new life. We first
                met at IGA Preston, where we both worked. It was love at first
                sight, and our connection only grew stronger from there. Our
                first official date was at Melbourne Central. We dined at a cozy
                Korean restaurant, enjoyed a few drinks, and spent a magical
                evening by the river.
              </p>
              <img src={image5} alt="cutieeee" className="storyPostImgColumn" />
            </div>

            {/* Second Section */}
            <div className="storyColumnText">
              <h3 className="storyPostHead">Getting to Know Each Other</h3>
              <p className="storyPostDesc">
                Our relationship became official on July 28, 2023, and since
                then, our bond has only grown stronger. Like any couple, we’ve
                had our challenges. Sometimes my ego and her temper clashed, but
                we always overcame these hurdles together. Priya has stood by me
                through thick and thin, even when I wasn’t at my best. Priya is
                an amazing person—energetic, sweet, kind, and, most importantly,
                she loves me deeply.
              </p>
              <img
                src={image45}
                alt="cutieeee"
                className="storyPostImgColumn"
              />
            </div>

            {/* Third Section */}
            <div className="storyColumnText">
              <h3 className="storyPostHead">Adventures Together</h3>
              <p className="storyPostDesc">
                We love to travel and explore new places. From spontaneous road
                trips along the coast to immersing ourselves in local culture,
                every journey with Priya is an adventure. She’s a bit wild and
                spontaneous, while I’m more calm and steady. Priya’s vibrant
                emotions can swing from happy to enthusiastic, playful to
                adorable, and thoughtful to excited in a matter of seconds.
                Despite our different temperaments, we complement each other
                perfectly. Her spontaneity brings excitement and joy to our
                lives, while my calmness provides balance and stability.
                Together, we create a harmonious blend that makes our
                relationship strong and dynamic.
              </p>
              <img
                src={image19} 
                alt="cutieeee"
                className="storyPostImgColumn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryPost;
