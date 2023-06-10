import ContactForm from "components/ContactForm/ContactForm/ContactForm"
import ContactList from "components/ContactForm/ContactList/ContactList"
import Filter from "components/ContactForm/Filter/Filter"
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
