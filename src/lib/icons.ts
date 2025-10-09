import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faArrowRight, 
  faStar,
  faBars,
  faShoppingCart,
  faCheck,
  faEnvelope,
  faPhone,
  faUser,
  faPalette,
  faImage,
  faCode,
  faPrint,
  faPaintBrush, // replacing faBrandingCraft with faPaintBrush for branding icon
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

// Add icons to library for global use
library.add(
  faArrowRight,
  faStar,
  faBars,
  faShoppingCart,
  faCheck,
  faEnvelope,
  faPhone,
  faUser,
  faPalette,
  faImage,
  faCode,
  faPrint,
  faBrandingCraft,
  faChartLine
);

// Icon name mapping for consistent usage
export const ICONS = {
  arrowRight: faArrowRight,
  star: faStar,
  menu: faBars,
  cart: faShoppingCart,
  check: faCheck,
  email: faEnvelope,
  phone: faPhone,
  user: faUser,
  design: faPalette,
  image: faImage,
  code: faCode,
  print: faPrint,
  branding: faPaintBrush,
  analytics: faChartLine
} as const;

export type IconName = keyof typeof ICONS;
