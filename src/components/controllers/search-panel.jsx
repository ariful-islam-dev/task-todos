import React from 'react'
import { Button, Input } from 'reactstrap'
import PropTypes from 'prop-types';

function SearchPanel({ term, handleSearch, toggleForm }) {
    return (
        <div className="d-flex">
            <Input
                className="mr-3"
                placeholder="Enter Search Term"
                value={term}
                onChange={e => handleSearch(e.target.value)}
            />
            <Button color="success" onClick={toggleForm}>New</Button>
        </div>
    )
}

SearchPanel.propType={
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SearchPanel
