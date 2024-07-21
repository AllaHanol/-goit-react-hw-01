import css from './Profile.modus.css'

const Profile = ({ name, tag, location, image, stats }) => {
      
	return (
    <>
        <div className={css.profile}>
            <img
                src={image}
                alt={name} />
            <p className={css.profileText}> {name}</p>
            <p className={css.profileText}> {tag}</p>
            <p className={css.profileText}> {location} </p>
        </div>
            <ul className={stats}>
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