import { Card, CardCount, CardIcon, CardTitle, CardTodayGrow } from './OverviewCard.styles';

interface OverviewCardProps {
  title: string;
  count: number;
  icon: string;
  todayGrow: number;
}

export default function OverviewCard({ count, icon, title, todayGrow }: OverviewCardProps) {
  function getGain() {
    return todayGrow >= 0 ? 'up' : 'down';
  }

  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardIcon src={icon} />
      <CardCount>{count}</CardCount>
      <CardTodayGrow type={getGain()}>
        <img src={`icon-${getGain()}.svg`} alt={`${getGain()} arrow`} />
        <p>{todayGrow >= 0 ? `${todayGrow}%` : `${todayGrow * -1}%`}</p>
      </CardTodayGrow>
    </Card>
  );
}
