import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index.js';

const NoteItemBody = ({id, title, body, createdAt}) => {
  return (
    <div className='note-item'>
        <h3 className='note-item__title'>
        <Link to={`notes/${id}`}>{title}</Link>
        </h3>
        <p className='note-item__createdAt'>{showFormattedDate(createdAt)}</p>
        <p className='note-item__body'>{body}</p>
    </div>
  )
}

export default NoteItemBody;