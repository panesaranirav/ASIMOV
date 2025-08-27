import TShartData from "./TShartSuggest.json";
import PantData from "./MPaint.json";
import FPantData from "./FPaint.json";
import Shoes from "./Shoes.json";
import Dress from "./Dress.json";
import Laptop from "./Laptop.json";
import Perfume from "./Perfume.json";
import Sofa from "./Sofa.json";
import Haircare from "./Haircare.json";
import Phone from "./Phone.json";
import Products from "./products.json";
import PopulerWatch from "./PopulerWatch.json";
import Keybord from "./KeyBord.json"
import KeybordTemplet from "./KeybordTemplet.json"
import Sunglassic from "./Sunglassic.json"
import ProductPage from "./ProductPage.json"

const allProducts = [
  ...ProductPage,
  ...Sunglassic,
  ...KeybordTemplet,
  ...Keybord,
  ...PopulerWatch,
  ...TShartData,
  ...PantData,
  ...FPantData,
  ...Shoes,
  ...Dress,
  ...Laptop,
  ...Perfume,
  ...Sofa,
  ...Haircare,
  ...Phone,
  ...Products,
];

export default allProducts;
