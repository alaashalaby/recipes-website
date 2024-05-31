import headerImg from "../assets/header_img.webp";
import HeaderContent from "./HeaderContent";
import Banner from "./Banner";
const Header = () => {
  return (
    <Banner bannerImg={headerImg}>
      <HeaderContent />
    </Banner>
  );
};
export default Header;
