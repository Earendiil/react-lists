
import PropTypes from 'prop-types';

function List({ category = "Category", items = [] }) { 

    // Sorting and filtering can be applied here if needed
    // items.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // items.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    // items.sort((a, b) => a.calories - b.calories); // Numeric
    // items.sort((a, b) => b.calories - a.calories); // Reverse Numeric

    // Filtering example
    // const lowCalItems = items.filter(item => item.calories < 100);
    // const highCalItems = items.filter(item => item.calories >= 100);

    const listItems = items.map(item => (
        <li key={item.id}>
            {item.name}: <b>{item.calories}</b>
        </li>
    ));

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.string
    }))
}

export default List;
