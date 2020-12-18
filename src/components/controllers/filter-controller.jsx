import React from 'react'
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap'

const FilterController = ({ handleFilter, filter }) => {
    return (
        <ButtonGroup>
            <Button color={filter === 'all' ? 'success' : 'secondary'} onClick={() => handleFilter('all')}>All</Button>
            <Button color={filter === 'running' ? 'success' : 'secondary'} onClick={() => handleFilter('running')}>Running</Button>
            <Button color={filter === 'completed' ? 'success' : 'secondary'} onClick={() => handleFilter('completed')}>Completed</Button>
        </ButtonGroup>
    )
}

FilterController.propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired
}

export default FilterController
