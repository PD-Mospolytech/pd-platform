import React from 'react';
import categoryData from '../../../database/category.json';
import CategoryItem from './CategoryItem';

export default function CategoryList({changeCategoryId}) {
  return (
    <div>
        <span><b className='filter_name'>Тематика</b></span>
        {
            categoryData.map((category) => (
                <CategoryItem 
                    categoryItem={category}
                    changeCategoryId={changeCategoryId}
                />
            ))
        }
    </div>
  )
}
