import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";

export const HeaderAppBar = styled(AppBar)`
  position: sticky;
  grid-template-columns: 60px 1fr;
  grid-template-areas: "img alt";
  gap: 40px 60px;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
      height: ${(props) => props.theme.spacing(8)};
    }
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: ${(props) => props.theme.spacing(10)};
    }
  }
`;

export const HeaderLogo = styled("img")`
  grid-area: img;
  height: ${(props) => props.theme.spacing(6)};

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: ${(props) => props.theme.spacing(4.5)};
  }
`;

export const HeaderText = styled("h4")`
  grid-area: alt;
  color: ${({ theme }) => theme.palette.primary.main};
  
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${(props) => props.theme.typography.body1.fontSize};
    padding: 0px 0px 0px ${({ theme }) => theme.spacing(0.7)};
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${(props) => props.theme.typography.h6.fontSize};
    padding: 0px 0px 0px ${({ theme }) => theme.spacing(1)};
  }
`;
