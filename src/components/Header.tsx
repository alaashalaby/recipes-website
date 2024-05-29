import headerImg from "../assets/header_img.jpg";
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
