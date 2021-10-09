import React from 'react';

import { PageSubTitleStyled, PageTitleContainer, PageTitleStyled } from './PageTitle.style';

interface PageTitleProps {
  title: string;
  subtitle: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <div>
      <PageTitleContainer>
        <PageTitleStyled color="red">{props.title}</PageTitleStyled>
        <PageSubTitleStyled>{props.subtitle}</PageSubTitleStyled>
      </PageTitleContainer>
    </div>
  );
};

export default PageTitle;
