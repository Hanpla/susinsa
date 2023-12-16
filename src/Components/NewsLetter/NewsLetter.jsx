import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offer On your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email ID" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
