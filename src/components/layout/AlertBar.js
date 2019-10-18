import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

const AlertBar = ({ alerts }) =>
    alerts !== null && alerts.length > 0 && alerts.map(alert => (

        <Alert key={alert.id} variant={alert.alertType}>
            {alert.msg}
        </Alert>

    ))

AlertBar.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(AlertBar);