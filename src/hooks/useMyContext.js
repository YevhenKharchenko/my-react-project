import { useContext } from "react";
import { myContext } from "../main";

export const useMyContext = () => useContext(myContext);
