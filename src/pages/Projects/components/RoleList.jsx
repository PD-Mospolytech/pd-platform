import React from 'react';
import roleData from '../../../database/role.json';
import RoleItem from './RoleItem';

export default function RoleList({changeRoleId}) {
  return (
    <div>
        <span><b className='filter_name'>Роль в проекте</b></span>
        {
            roleData.map((role) => (
                <RoleItem
                    roleItem={role}
                    changeRoleId={changeRoleId}
                />
            ))
        }
    </div>
  )
}
