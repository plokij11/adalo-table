import Row from "../row";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

export default function TableBody({ sortedColumns, filteredRows }) {
    return (
        <ScrollContainer className="scroll-container">
            {sortedColumns?.length === 0 ? (
                <div className="table-no-data">Add some data data</div>
            ) : (
                <div className="table-container">
                    <table className="table">
                        <thead>
                        <tr>
                            {sortedColumns.map((column) => (
                                <th
                                    key={column.key}
                                    style={{
                                        ...column.styles,
                                        width: column.expandToFillSpace ? '100%' : 'auto',
                                        textAlign: column.expandToFillSpace ? 'right' : 'left'
                                    }}
                                >
                                    {column.title}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {filteredRows.map((row, index) => (
                            <Row key={index} row={row} columns={sortedColumns} />
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </ScrollContainer>
    );
}

