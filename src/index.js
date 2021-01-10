import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import { Time } from './Time'


const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
            {files.map(file => (
                <FileListItem key={file.id} file={file} />
            ))}
        </tbody>
    </table>
);
FileList.propTypes = {
    files: PropTypes.array
};

const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        <td><FileIcon file={file} /></td>
        <td><FileName file={file} /></td>
        <td><CommitMessage commit={file.latestCommit} /></td>
        <td className="age"><Time time={file.updated_at} /></td>
    </tr>
);
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

function FileIcon({ file }) {
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

function FileName({ file }) {
    return (
        <div>
            {file.name}
        </div>
    );
}
FileName.propTypes = {
    file: PropTypes.object.isRequired
};

const CommitMessage = ({ commit }) => (
    <div className="commit-message">
        {commit.message} 
    </div>
)
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
}

const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: '2021-01-09 21:24:000',
        latestCommit: {
            message: 'Initial Commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: '2021-01-09 21:24:00',
        latestCommit: {
            message: 'Initial Commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: '2021-01-10 10:00:00',
        latestCommit: {
            message: 'Added a readme'
        }
    }
]

ReactDOM.render(
    <FileList files={testFiles}/>,
    document.querySelector('#root')
);