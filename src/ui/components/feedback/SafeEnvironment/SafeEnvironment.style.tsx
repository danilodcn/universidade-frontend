import { styled } from "@mui/material";

export const SafeEnvironmentContainer = styled("div")`
  text-align: right;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.secondary};
  padding: ${({ theme }) => theme.spacing(3)} 0;
  font-size: ${(props) => props.theme.typography.body1.fontSize};

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${(props) => props.theme.typography.body2.fontSize};
    padding: ${({ theme }) => theme.spacing(2)} 0;
  }
  
`;
