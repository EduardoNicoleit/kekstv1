import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LangContext = React.createContext([{}, () => {}]);

const LangProvider = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState(t("app_name"));
  return (
    <LangContext.Provider value={[state, setState]}>
      {props.children}
    </LangContext.Provider>
  );
};

export { LangContext, LangProvider };
