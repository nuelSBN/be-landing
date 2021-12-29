import "../cssFiles/banner.css";
import BannerContent from "./BannerContent";
import Form from "./Form";

export default function Banner() {
  return (
    <div className="bannerContainer">
      <div className="rightContainer">
        <BannerContent />
        <Form />
      </div>
    </div>
  );
}
