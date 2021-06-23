import React, { useState } from 'react'
import Loading from './src/components/Loading'

const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer;

const AppProvider =(props)=>{
    const [loading, setLoading] = useState(false)
    const showProgress =(props) => setLoading(props)
    const hideProgress =() =>setLoading(false)
    const funcs = {
        showProgress: showProgress,
        hideProgress: hideProgress
    }
    return(
        <AppContext.Provider value={{...funcs}}>
            {props.children}
            <Loading show={loading}/>
        </AppContext.Provider>
    )
}

export default AppProvider