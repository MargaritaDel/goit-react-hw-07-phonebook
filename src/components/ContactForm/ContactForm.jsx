import { useState } from 'react';
import { ContainerForm, ContainerLabel, ContainerInput, ContainerButton } from './ContactForms.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleOnSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const {
      elements: { name, number },
    } = form;
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );
    if (isExist) {
      alert(`${name.value} is already in contacts`);
      return;
    }
    dispatch(addContact({ name: name.value, number: number.value }));
    setName('');
    setNumber('');
    form.reset();
  };

  const handleChangeName = event => setName(event.target.value);

  const handleChangeNumber = event => setNumber(event.target.value);

  return (
    <ContainerForm action="" onSubmit={handleOnSubmit}>
      <ContainerLabel htmlFor="" name="name">
        Name
        <ContainerInput
          value={name}
          onChange={handleChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContainerLabel>
      <ContainerLabel htmlFor="" name="number">
        Number
        <ContainerInput
          value={number}
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContainerLabel>

      <ContainerButton type="submit">Add contact</ContainerButton>
    </ContainerForm>
  );
};

export default ContactForm;