import List from './List.jsx'
import './App.css'

function App() {

  const fruits = [{id: 1, name: "apple", calories: 5 }, 
                  {id: 2, name: 'orange', calories: 45}, 
                  {id: 3, name: 'coconut', calories: 44},
                  {id: 4, name: 'banana', calories: 55},
                  {id: 5, name: 'pineapple', calories: 36}];

const vegetables = [{id: 6, name: "potatoes", calories: 95 }, 
                    {id: 7, name: 'celery', calories: 33}, 
                    {id: 8, name: 'carrots', calories: 64},
                    {id: 9, name: 'corn', calories: 12},
                    {id: 10, name: 'cucumber', calories: 78}];

  return (
    <>
    {fruits.length > 0 ? (<List items={fruits} category="Fruits"/> ) 
                       : (<h3 className="list-category">Fruits</h3>
    )}
    {vegetables.length > 0 ? (<List items={vegetables} category="Vegetables" />)
                       : (<h3 className="list-category">Category</h3>)}
    </>
  );
}

export default App
