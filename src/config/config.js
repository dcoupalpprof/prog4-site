export const config = {
    defaultCours: process.env.REACT_APP_DEFAULT_COURS_NO || 2,
    isOffline: process.env.REACT_APP_IS_OFFLINE || 0,
    lastCours: process.env.REACT_APP_LAST_COURS || '',
    navCoursExclus: process.env.REACT_APP_NAV_COURS_EXCLUSION || '',
    siteTitle: process.env.REACT_APP_SITE_TITLE || 'IEL'
};