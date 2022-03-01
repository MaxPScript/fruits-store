import React from 'react'
import ContactBackground from "../assets/contact_bg.jpg"
import "../styles/Contact.css"

function Contact() {
    return (
        <div className='contact'>
            <div className="leftSide" style={{ backgroundImage: `url(${ContactBackground})` }}></div>
            <div className="rightSide">
                <h1>
                    Обратная связь
                </h1>
                <form action="#" id="contact-form">
                    <label htmlFor="name">Имя</label>
                    <input type="text" name='name' placeholder='Ваше имя' />
                    <label htmlFor="email">Электронная почта</label>
                    <input type="email" name='email' placeholder='Ваша электронная почта' />
                    <label htmlFor="message">Ваш вопрос, или пожелание</label>
                    <textarea name="message" cols="30" rows="10" placeholder='...' required></textarea>
                    <button type="submit">
                        Отправить сообщение
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact