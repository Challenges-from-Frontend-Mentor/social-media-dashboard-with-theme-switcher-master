import {
  Card,
  CardCount,
  CardDecorator,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
  CardType,
} from './SocialCard.styles';

interface SocialCardProps {
  type: 'followers' | 'subscribers';
  count: number;
  today: number;
  user: string;
  iconUrl: string;
  color: string;
}

export default function SocialCard({ type, count, color, iconUrl, today, user }: SocialCardProps) {
  function getCount() {
    return count >= 10000 ? `${(count / 1000).toFixed(0)}k` : count;
  }

  function getGain() {
    return today >= 0 ? 'up' : 'down';
  }

  return (
    <Card>
      <CardDecorator color={color} />
      <CardHeader>
        <CardImage src={iconUrl} />
        <CardTitle>{user}</CardTitle>
      </CardHeader>
      <CardCount>{getCount()}</CardCount>
      <CardType>{type}</CardType>
      <CardFooter type={getGain()}>
        <img src={`./src/assets/icon-${getGain()}.svg`} alt={`${getGain()} arrow`} />
        <p>{today >= 0 ? `${today} Today` : `${today * -1} Today`}</p>
      </CardFooter>
    </Card>
  );
}
