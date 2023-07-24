# rns-search-select-box
A custom React Native search select box component with TypeScript.

# Installation
```
npm i rns-search-select-box
```

# Basic Usage
```
import RNSearchSelectBox from 'rns-search-select-box';
export default function App() {
  const [select, setSelect] = useState({})
  useEffect(() => {
    console.log(select)
  }, [select])
  const data = [
    {
      id: 1, value: "Enes",
    },
    {
      id: 2, value: "Karatas",
    },
    {
      id: 3, value: "Testing",
    },
    {
      id: 4, value: "Data",
    },
  ]

return (
...
      <RNSearchSelectBox 
        selectedText={select?.value != undefined ? select?.value : "Select.."} 
        onSelect={setSelect}
        data={data}
        itemTextStyle={{color: "white"}}
        selectedTouchableStyle={{ backgroundColor: "teal"}}
        arrowColor='teal'
        arrowSize={22}
        style={{backgroundColor: "white"}}
        modalStyle={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
        searchBoxStyle={{padding: 10}}
       />
)
```
![1](https://github.com/karatasenes/rns-search-select-box/assets/128232281/f070728f-e47e-431f-a558-6ad865e8310d)

![2](https://github.com/karatasenes/rns-search-select-box/assets/128232281/6ee1d08e-9bba-4d2d-a58c-fff5c5539845)

![3](https://github.com/karatasenes/rns-search-select-box/assets/128232281/be3c6170-e989-405d-a4a5-944dc65b8ef7)


# MIT
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
