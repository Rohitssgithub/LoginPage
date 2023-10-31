import React from 'react';
import DataTable from 'react-data-table-component';


const Table = (props) => {
    return (
        <>
            <DataTable
                {...props}
                // className={styles.table}
            />
        </>
    )
}

export default Table