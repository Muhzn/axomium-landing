export const handleNavigation = (component, targetRef, navigate) => {
    if (window.location.pathname === '/') {
        switch (component) {
            case 'title':
                targetRef[component].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'description':
                targetRef[component].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'ourOfferings':
                targetRef[component].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'blogs':
                targetRef[component].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contactUs':
                targetRef[component].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                console.log('NoTabSpecified');
        }
    }
    else {
        navigate(`/#${component}`);
    }
};