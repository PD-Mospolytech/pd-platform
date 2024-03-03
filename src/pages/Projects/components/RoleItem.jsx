import React from 'react';

export default function RoleItem({roleItem, changeRoleId}) {
    const [isFilter, setIsFilter] = React.useState(false);

   React.useEffect(() => {
        if(isFilter) {
            changeRoleId(roleItem.roleId);
        }
   }, [isFilter]);

  return (
    <div key={roleItem.roleId}>
        <input 
            style={{marginRight: '10px'}}
            type='checkbox' 
            value={isFilter}
            onChange={() => setIsFilter(!isFilter)}
        />
        <span className='filter_name'>{roleItem.roleName}</span>
    </div>
  )
}
