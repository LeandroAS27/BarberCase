import { FaWhatsapp } from "react-icons/fa";
import '../../styles/whatsappButton.scss';

const WhatsappButton = () => {
    return(
        <> 
            <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on whatsapp"
                className="whatsapp-button"
            >
                <FaWhatsapp size={24}/>
            </a>
        </>
    )
}

export default WhatsappButton;