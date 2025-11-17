import useLocalStorage from './../../hooks/useLocalStorage';

export default function NewUser() {
  const [value, setValue] = useLocalStorage('SouDesign', '')
  
    return (
      <div className="App">
        <input type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
}
