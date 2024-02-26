import nightMobile from "../../public/assets/mobile/bg-image-nighttime.jpg";
import dayMobile from "../../public/assets/mobile/bg-image-daytime.jpg";
import nightTablet from "../../public/assets/tablet/bg-image-nighttime.jpg";
import dayTablet from "../../public/assets/tablet/bg-image-daytime.jpg";
import nightDesktop from "../../public/assets/desktop/bg-image-nighttime.jpg";
import dayDesktop from "../../public/assets/desktop/bg-image-daytime.jpg";

const backgroundImages = {
  mobile: {
    day: dayMobile,
    night: nightMobile,
  },
  tablet: {
    day: dayTablet,
    night: nightTablet,
  },
  desktop: {
    day: dayDesktop,
    night: nightDesktop,
  },
}

export default backgroundImages;