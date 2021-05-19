import { Component } from "react";
import { connect } from "react-redux";
import Filter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";
import ContactList from "../ContactList/ContactList";

export class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {this.props.isLoadingContacts && <h2>Загрузка...</h2>}
        <Filter />
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
