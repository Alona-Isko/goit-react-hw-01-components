import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'
import defaultFriendImage from './friend.png';

const FriendListItem = ({
    avatar = defaultFriendImage,
    name,
    isOnline,
    id
    }) => (
    <li className={styles.item} key={id}>
        <span className={styles.status}></span>
            <img className={styles.avatar} src={avatar} alt={name}/>
        <p className={styles.name}>{name}</p>
        </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
