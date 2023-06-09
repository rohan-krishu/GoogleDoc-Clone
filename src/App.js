import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import TextEditor from './Components/TextEditor/TextEditor';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <TextEditor/>
    </div>
  );
}

export default App;
