import { ContainerItem, ContainerList, ContainerButtons } from './ContactList.styled';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';



import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const onDelete = id => dispatch(deleteContact(id));
  return (
    <ContainerList>
      {contacts &&
        contacts.map(({ id, name, phone }) => (
          <ContainerItem key={id}>
            {name}: {phone}
            <ContainerButtons onClick={() => onDelete(id)}>Delete</ContainerButtons>
        </ContainerItem>
      ))}
    </ContainerList>
  );
};


// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }) ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;