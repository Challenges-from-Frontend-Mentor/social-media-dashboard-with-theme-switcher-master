import styled from 'styled-components';
import { CardFooter, CardImage } from '../SocialCard/SocialCard.styles';

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 1rem;
  align-items: baseline;
  border-radius: 0.5rem;
  padding: 2rem;
  background: ${(props) => props.theme.cardBackground};
`;

export const CardTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: capitalize;
  color: ${(props) => props.theme.textSecondary};
`;

export const CardCount = styled.p`
  font-size: 2.3rem;
  font-weight: 700;
  color: ${(props) => props.theme.textPrimary};
`;

export const CardIcon = styled(CardImage)`
  justify-self: end;
`;

export const CardTodayGrow = styled(CardFooter)`
  padding: 0;
  justify-content: flex-end;
`;
