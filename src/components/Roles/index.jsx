import React from 'react';
import UserRoleForm from './user';
import  PoliticsForm from './politics';

const Role = () => {
    return ( 
        <React.Fragment>
                 <div>
                    <h3>
                        User Role
                    </h3>
                </div>
               
                <div  >
                    <UserRoleForm/>
                </div>
               
              
                <div>
                    < PoliticsForm />
                </div>
        </React.Fragment>
     );
}
 
export default Role;