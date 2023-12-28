import Navbar from '../components/Navbar'
import '../App.css';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';


export default function HomePage() {
    const { t } = useTranslation();

    

    // useEffect(()=>{
    //     const lng = navigator.language;
    //     i18n.changeLanguage(lng);
    // },[])
    // const lng = navigator.language;
   
    return (
        
        <>
            <Navbar />
            <div className='titlepage'>
            <h2>
                {t('greeting')}
            </h2>
            <span>
                {/* Browser Language: {lng} */}
            </span>
            </div>
            

        </>
    )
}