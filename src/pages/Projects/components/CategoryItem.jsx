import React from 'react';

export default function CategoryItem({categoryItem, changeCategoryId}) {
    const [isFilter, setIsFilter] = React.useState(false);

   React.useEffect(() => {
        if(isFilter) {
            changeCategoryId(categoryItem.categoryId);
        }
   }, [isFilter]);

  return (
    <div key={categoryItem.categoryId}>
        <input 
            style={{marginRight: '10px'}}
            type='checkbox' 
            value={isFilter}
            onChange={() => setIsFilter(!isFilter)}
        />
        <span className='filter_name'>{categoryItem.categoryName}</span>
    </div>
  )
}
