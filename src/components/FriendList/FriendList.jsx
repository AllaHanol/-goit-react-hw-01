
import FriendListItem from "../FriendListItem/FriendListItem";
const FriendList = ({ friends }) => {
    return (
       <ul>
	{friends.map(({avatar, name, isOnline, id}) => <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}
	<li>
	<FriendListItem/>
	</li>
</ul>

    );
};
export default FriendList;