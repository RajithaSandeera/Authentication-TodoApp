import {
  Button,
  ThemeConfig,
} from "antd";
import styled from "styled-components";

export const PrimaryTheme: ThemeConfig = {
  components: {
    Button: {
      colorPrimary: '#5570F1'
    },
    Pagination: {
      borderRadius: 20,
      itemActiveBg: '#e46119',
      colorPrimary: '#f8f8f8',
      colorPrimaryHover: '#f8f8f8'
    }
  }
}

export const StyledPrimaryOutlineButton = styled(Button)`
  color: #e46119;
  border-color: #f46459;
`;