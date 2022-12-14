import React from 'react';
import useFontAwesome from 'hooks/useFontAwesome';
import { IContactLink } from 'types/types';
import { Wrapper, Item } from './HeaderLinksElements';
import useMediaQueries from 'hooks/useMediaQueries';

interface Props {
  linksList: IContactLink[];
}

const HeaderLinks = ({ linksList }: Props) => {
  const { Icon } = useFontAwesome();
  const { isTabletS } = useMediaQueries();

  return (
    <Wrapper>
      {linksList.map(item => (
        <Item href={item.link} key={item.link} target="_blank">
          <Icon color="#ababab" size={isTabletS ? '2x' : '3x'} icon={item.icon} />
        </Item>
      ))}
    </Wrapper>
  );
};

export default HeaderLinks;
