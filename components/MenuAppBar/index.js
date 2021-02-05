import React from 'react';
import { Appbar, Badge, IconButton } from 'material-bread';
export const MenuAppBar = () => {
    return(
    <Appbar
        barType={"normal"}
        title={'Kookclub - Inschrijven'}
        navigation={'menu'}
        onNavigation={() => console.log('onNavigation!')}
        actionItems={[
            <Badge
                containerStyle={{marginRight: 16, flex: 1}}
                color={'#52a8f1'}
                textColor={'white'}
                size={14}
                content={77}>
                <IconButton name="notifications" size={24} color={'white'}/>
            </Badge>,
            <IconButton name="account-circle" size={24} color={'white'}/>,
            <IconButton name="more-vert" size={24} color={'white'} />,
        ]}
    />
    )
}

