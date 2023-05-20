import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactsList/ContactList';
import { Container, Title  } from './App.styled';



export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Container>
      <Title >Phonebook</Title >
      <ContactForm  />
      <Title>Contacts</Title>
      <Filter  />
      <ContactList  />
    </Container>
  );
};

export default App;
