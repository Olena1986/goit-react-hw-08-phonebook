import ContactForm from "pages/ContactForm/ContactForm/ContactForm"
import ContactList from "pages/ContactForm/ContactList/ContactList"
import Filter from "pages/ContactForm/Filter/Filter"
import { ContactPageStyle } from "./ContactPage.styled"

export const ContactsPage =()=> {
    return (
    <ContactPageStyle.ContactsStyle>
            <ContactForm/>
            <ContactList />
            <Filter />
    </ContactPageStyle.ContactsStyle>

    )

}
