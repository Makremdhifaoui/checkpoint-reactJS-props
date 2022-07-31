import './App.css';
import Profil from './Profil/Profil';
function App() {

  const greeting =(props)=>{
    alert (`Hello ${props.fullName}`)
  }

  return (
    <div className="App">
      <Profil  fullName="DHIFAOUI MAkREM" profession="FullStack JS Developer" 
      bio="Je suis FullStack Developer, Dynamique, rigoureuse et polyvalente, je tiens à vous assurer de ma motivation" greeting={greeting}/>
    </div>
  );
}

export default App;
