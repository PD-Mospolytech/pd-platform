import React from 'react';
import CategoryList from './CategoryList';
import RoleList from './RoleList';

export default function Filter({changeCategoryId, changeRoleId, toggleFilter, isFilter}) {
    const onClickOpenFilter = () => {
        toggleFilter();
    }

  return (
    <div>
          <span onClick={onClickOpenFilter} className={isFilter ? "projects_filter black" : "projects_filter white"}>фильтр</span>
        {
            isFilter && (
                <div className={isFilter ? "project_filter_open" : "project_filter_close"}>
                    <CategoryList 
                        changeCategoryId={changeCategoryId}
                    />
                    <RoleList
                        changeRoleId={changeRoleId}
                    />
                </div>
            ) 
        }
    </div>
  )
}
