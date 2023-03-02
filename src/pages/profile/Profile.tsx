import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectIsAuth } from '../../app/store/AuthSlice';

const Profile: React.FC = () => {
	const navigate = useNavigate();
	const isAuth = useAppSelector(selectIsAuth);

	useEffect(() => {
		if (!isAuth) {
			return navigate('/', { replace: true });
		}
	}, [isAuth, navigate]);
	return <></>;
};
export default Profile;
