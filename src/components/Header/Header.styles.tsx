import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1.5rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.825rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(props) => props.theme.textSecondary};

  @media (min-width: 1024px) {
    grid-column: 1 / 2;
  }
`;

export const Separator = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.textSecondary};
  padding: 0.5px;
  margin: 1.5rem 0;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SwitchContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    width: auto;
    gap: 1rem;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    align-self: center;
    justify-self: flex-end;
  }
`;

export const SwitchLabel = styled.label`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${(props) => props.theme.textSecondary};
`;

export const SwitchButton = styled.button`
  width: 3.5rem;
  height: 1.75rem;
  border-radius: 1.75rem;
  background: hsl(230, 22%, 74%);
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  }

  &::before {
    content: '';
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.background};
    transition: all 0.3s ease-in-out;
  }

  &.dark {
    background: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%));

    &:hover {
      filter: brightness(1.1);
    }
  }

  &.dark::before {
    left: 0.25rem;
  }
`;
