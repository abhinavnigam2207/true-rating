import React from 'react';

const ListLoader = () => {
    let table = [];
    for (let i = 0; i < 5; i++) {
        table.push(
            <div className="col-12 col-md-3 m-md-4 mt-3 border p-3" style={{maxHeight: '140px'}}>
                <p className="shine" style={{ height: '20px', width: '100%' }}></p>
                <p className="shine" style={{ height: '20px', width: '100%' }}></p>
                <p className="shine" style={{ height: '20px', width: '100%' }}></p>
            </div>
        )
    }
    return table
}

export default ListLoader
