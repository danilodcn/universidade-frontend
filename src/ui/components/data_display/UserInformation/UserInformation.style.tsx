import { Avatar, Rating, styled } from "@mui/material";

export const UserInformationContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";
  background-color: ${({ theme }) => theme.palette.grey["200"]};
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${(props) =>
    props.theme.spacing(0.5) +
    " " +
    props.theme.spacing(2)}; /* espaçamento entre linhas e colunas */
  align-items: center;
`;

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${(props) => props.theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const UserDescription = styled("div")`
  grid-area: description;
  color: ${(props) => props.theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

export const RatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: 14px;
`;
