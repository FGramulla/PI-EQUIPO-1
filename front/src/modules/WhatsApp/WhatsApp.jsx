import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';


const SendMessage = () => {

    return (

        <WhatsAppWidget        
            message={`Hola! 👋🏼 \n\nEn qué puedo ayudarte?`}
            phoneNumber="541165492709"
        />
    );
};

export default SendMessage;
