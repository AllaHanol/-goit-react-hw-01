import styled from '../Profile/Profile.modus.css';
const Profile = ({ name, tag, location, image, stats }) => {
      
	return (
    <>
        <div className={styled.profile}>
            <img
                src={image}
                alt={name} />
            <p className={styled.profileText}> {name}</p>
            <p className={styled.profileText}> {tag}</p>
            <p className={styled.profileText}> {location} </p>
        </div>
            <ul className={styled.stats}> {stats}
                <li>
                    <span>Followers</span> <br />
                    <span>1000</span>
                </li>
                <li>
                    <span>Views</span> <br />
                    <span>2000</span>
                </li>
                <li>
                    <span>Likes</span> <br />
                    <span>3000</span>
                </li>
            </ul>
    </>
        
  );
};

export default Profile;