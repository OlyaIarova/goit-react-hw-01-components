import PropTypes, { shape } from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <FriendListItem friend={friend} />
        </li>
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
