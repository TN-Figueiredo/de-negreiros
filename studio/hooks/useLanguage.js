import * as EN from "../language/en";
import * as PTBR from "../language/pt-br";

const useLanguage = () => {
  if (process.env.SANITY_STUDIO_LANGUAGE === "pt-br") {
    return PTBR;
  } else {
    return EN;
  }
};

export default useLanguage;
