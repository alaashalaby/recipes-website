import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import styles from "./styles";
import Button from "./components/Button";
import Input from "./components/Input";

const theme = extendTheme({
    colors,
    fonts,
    styles,
    components: {
        Button,
        Input,
    }
})
export default theme;