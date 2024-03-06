import BookList from "./Booklist";
import Card from "./Card";
import Box from "./Box";
import Product from "./Product";
import Alert from "./Alert";
import UserMenu from "./User";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

const App = () => {
  return (
    <>
      <Alert variant="info" outlined={true} elevated={true}>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined={true}>
        Please update your profile contact information
      </Alert>
      <UserMenu name="Jimbo" />
      <Box />
      <Product
        price={999}
        name="Burrito"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      />
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>
    </>
  );
};

export default App;
