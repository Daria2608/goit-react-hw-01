import css from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList({friends}) {
    return <ul className={css.list}>
        {friends.map(friend => <li className={css.listItem} key={friend.id}>
        <FriendListItem friend={friend}/>
	</li>)}
</ul>
}