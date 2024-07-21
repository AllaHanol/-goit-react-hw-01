import styled from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
      
	return (
    <>
        <div className={styled.profile}>
            <img className={styled.profileIcon}
                src={image}
                alt={name} />
            <p className={styled.profileNameText}> {name}</p>
            <p className={styled.profileTagText}> @{tag}</p>
            <p className={styled.profileLocationText}> {location} </p>
        </div>
            <ul className={styled.profileStats}> 
                <li className={styled.profileListItem}>
                    <span className={styled.profileListName}>Followers</span> <br />
                    <span>{stats.followers}</span>
                </li>
                <li className={styled.profileListItem}>
                    <span className={styled.profileListName}>Views</span> <br />
                    <span>{stats.views}</span>
                </li>
                <li className={styled.profileListItem}>
                    <span className={styled.profileListName}>Likes</span> <br />
                    <span>{stats.likes}</span>
                </li>
            </ul>
    </>
        
  );
};

export default Profile;