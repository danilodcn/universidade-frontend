import { styled } from "@mui/material/styles";

export const PageTitleContainer = styled("div")`
  margin: ${(props) => props.theme.spacing(3) + " 0"};
  text-align: center;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: 600;

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${(props) => props.theme.typography.body1.fontSize};
  }
`;

export const PageSubTitleStyled = styled("h3")`
  margin: ${(props) => props.theme.spacing(2) + " 0"};
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${(props) => props.theme.typography.body1.fontSize};
  font-weight: normal;

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${(props) => props.theme.typography.body2.fontSize};
  }
`;
