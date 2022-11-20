import Data from '../../data';
import SocialCard from '../SocialCard/SocialCard';
import SocialContainer from './Social.styles';

export default function Social() {
  function getSocialCards() {
    return Data.map((item) => (
      <SocialCard
        key={item.id}
        type={item.type as 'followers' | 'subscribers'}
        count={item.count}
        today={item.today}
        user={item.user}
        iconUrl={item.icon}
        color={item.color}
      />
    ));
  }

  return <SocialContainer>{getSocialCards()}</SocialContainer>;
}
