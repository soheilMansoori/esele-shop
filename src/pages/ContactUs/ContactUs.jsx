import ContactUsForm from '../../components/templates/ContactUsPage/ContactUsForm/ContactUsForm';
import ContactUsImg from '../../components/templates/ContactUsPage/ContactUsImg/ContactUsImg';
import ContactUsImgMobile from '../../components/templates/ContactUsPage/ContactUsImgMobile/ContactUsImgMobile';
import Header from '../../components/modules/Header/Header';
import Footer from '../../components/modules/Footer/Footer';
import { useEffect } from 'react';

export default function ContactUs() {
    useEffect(() => { document.title = "contact-us page" }, [])
    return (
        <>
            <Header />
            <main className='p-0'>
                <div className="contact d-flex flex-column flex-xl-row mt-1 align-items-center justify-content-center w-100 container-costumer">
                    <ContactUsImgMobile />
                    <ContactUsForm />
                    <ContactUsImg />
                </div>
            </main>
            <Footer />
        </>
    )
}
