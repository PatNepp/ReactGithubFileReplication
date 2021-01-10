import React from 'react';
import PropTypes from 'prop-types';

export const CommitMessage = ({ commit }) => (
    <div className="commit-message">
        {commit.message} 
    </div>
)
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
}