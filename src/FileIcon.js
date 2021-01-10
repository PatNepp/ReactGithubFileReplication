import React from 'react';
import PropTypes from 'prop-types';

export function FileIcon({ file }) {
    let icon = 'fa-file-text-o';
    if(file.type === 'folder') {
        icon = 'fa-folder';
    }

    return (
        <div className="file-icon">
            <i className={`fa ${icon}`} />
        </div>
    )
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
}