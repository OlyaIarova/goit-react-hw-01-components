import PropTypes, { shape } from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
          <FriendListItem
            friend={friend}
            key={friend.id}
            className={css.item}
          />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
