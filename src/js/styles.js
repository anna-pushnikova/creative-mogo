// Import fontawesome icons

import { dom, library } from '@fortawesome/fontawesome-svg-core';

import { faBasketballBall, faPaintBrush, faMagic, faSearch, faShoppingCart, faUserFriends, faCommentDots, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { faFacebookF, faTwitter, faPinterestP, faGooglePlusG, faInstagram, faYoutube, faTumblr } from '@fortawesome/free-brands-svg-icons';

import { faEye } from "@fortawesome/free-regular-svg-icons/faEye";

library.add(faBasketballBall, faCommentDots, faMapMarkerAlt, faUserFriends, faPaintBrush, faMagic, faSearch, faPinterestP, faShoppingCart, faFacebookF, faTwitter, faInstagram, faGooglePlusG, faYoutube, faTumblr, faEye);

dom.i2svg();