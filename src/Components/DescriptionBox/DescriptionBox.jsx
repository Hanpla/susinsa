import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit maiores officiis, esse omnis facere quibusdam
          necessitatibus ex sit amet alias est voluptatibus? Officiis impedit
          nobis rerum unde perspiciatis sit repudiandae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex
          tempora quod ipsam accusantium quae, qui, enim vero doloribus
          architecto fuga mollitia veritatis porro atque rem voluptates nisi
          velit voluptate.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
