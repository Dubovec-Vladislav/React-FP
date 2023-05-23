import React from 'react'
import Preloader from '../../../../common/preloaders/Preloader';
import { Link } from 'react-router-dom';
import ProfileStatus from './ProfileStatus';
// import './React.css'

function Profile(props) {
	if (!props.profile) return <Preloader />;
	return (
		<div className="profile__block">
			<div className="profile__body">
				<div className="profile__left">
					<div className="profile__img">
						<img src={props.profile.photos.large} alt="profilePhoto" />
					</div>
				</div>
				<div className="profile__right">
					<div className="profile__inf">
						<div className="profile__name">{props.profile.fullName}</div>
						<div className="profile__about">{props.profile.aboutMe}</div>
						{props.profile.lookingForAJob === true
							?
							<div className="profile__lookingjob">Статуст поиска работы - Ищу</div>
							:
							<div className="profile__lookingjob">Статуст поиска работы - Не Ищу</div>
						}
						<div className="profile__lookingjob-description">{props.profile.lookingForAJobDescription}</div>
						<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
						<Link className="profile__link-back" to="/find-users">Back <span></span></Link>
					</div>
				</div>
			</div>
		</div>
	);

};

export default Profile;