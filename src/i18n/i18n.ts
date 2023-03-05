import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

i18n
	// .use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: false,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: {
				translation: {
					menu: {
						home: 'Home',
						news: 'News',
						profile: 'Profile',
						authorization: 'Authorization',
						logout: 'Logout',
					},
				},
				ua: {
					translation: {
						menu: {
							home: 'Головна',
							news: 'Новини',
							profile: 'Профіль',
							authorization: 'Авторизація',
							logout: 'Вихід',
						},
					},
				},
			},
		},
	});

export default i18n;
