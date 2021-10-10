import PropTypes from 'prop-types';
import defaultFriendImage from './friend.png';

const FriendListItem = ({
    avatar = defaultFriendImage,
    name,
    isOnline,
    id
    }) => (
        <li class="item" key={id}>
            <span class="status"></span>
            <img class="avatar" src={avatar} alt={name} width="70" />
            <p class="name">{name}</p>
        </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
