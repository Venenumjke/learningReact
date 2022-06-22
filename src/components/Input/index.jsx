import React from 'react'

import styles from './styles'

const Input = React.forwardRef((props, ref) => {

    return (
        <input style={styles.myInput} ref={ref} {...props} type="text" placeholder='Введите слово' />
    )

})

export default Input