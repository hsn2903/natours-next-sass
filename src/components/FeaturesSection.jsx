import {
  IoCompassOutline,
  IoGlobeOutline,
  IoHeartOutline,
  IoMapOutline,
} from "react-icons/io5";

const FeaturesSection = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <IoGlobeOutline className="feature-box__icon" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              numquam eius accusantium?
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <IoCompassOutline className="feature-box__icon" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Meet nature
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              numquam eius accusantium?
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <IoMapOutline className="feature-box__icon" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Find your way
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              numquam eius accusantium?
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <IoHeartOutline className="feature-box__icon" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live healtier life
            </h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              numquam eius accusantium?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
