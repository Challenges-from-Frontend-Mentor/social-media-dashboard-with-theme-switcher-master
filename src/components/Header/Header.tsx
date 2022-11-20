import {
  HeaderContainer,
  HeaderSubtitle,
  HeaderTitle,
  Separator,
  SwitchButton,
  SwitchContainer,
  SwitchLabel,
} from './Header.styles';

export interface HeaderProps {
  currentTheme: string;
  toggleTheme: () => void;
}

export default function Header({ currentTheme, toggleTheme }: HeaderProps) {
  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Social Media Dashboard</HeaderTitle>
      <HeaderSubtitle>Total Followers: 23,004</HeaderSubtitle>
      <Separator />
      <SwitchContainer>
        <SwitchLabel>Dark mode</SwitchLabel>
        <SwitchButton
          className={currentTheme}
          onClick={() => {
            handleThemeChange();
          }}
        />
      </SwitchContainer>
    </HeaderContainer>
  );
}
