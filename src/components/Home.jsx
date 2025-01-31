import Notes from "./Notes.jsx";
const Home = (props) => {
  return (
    <div>
      <Notes showAlert={props.showAlert} />
    </div>
  );
};

export default Home;
