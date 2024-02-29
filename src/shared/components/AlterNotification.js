import React from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

import { getActions } from '../../store/actions/alertActions'
import { useDispatch, useSelector } from 'react-redux'

const AlertNotification = () => {
    const dispatch = useDispatch()
    const closeAlertMessage = getActions(dispatch).closeAlertMessage
    const { showAlertMessage, alertMessageContent } = useSelector(
        (store) => store.alert
    )

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={showAlertMessage}
            onClose={closeAlertMessage}
            autoHideDuration={6000}
        >
            <Alert severity='info'>{alertMessageContent}</Alert>
        </Snackbar>
    )
}

export default AlertNotification
