import React, { useState } from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const Body = () => {
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("400px");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");

    // const columns = ["Name", "Title", "Location"];
    const [columns, setColumns] = useState([
        { title: 'Customer No', field: 'customer_number' },
        { title: 'Date', field: 'date' },
        { title: 'Agent', field: 'agent' },
    ]);

    const options = {
        paging: true,
        emptyRowsWhenPaging: false,
        rowsPerPage: 10,
        rowsPerPageOptions: [10, 25, 50, 100],
        paginationType: true,
        hideFilterIcons: false,
        maxBodyHeight: 350,
        filterType: "dropdown",
        responsive: "scroll",
        selectableRows: false,
        downloadOptions: {
            filename: 'TokTown.csv'
        },
        onRowClick: (rowData, rowState) => {
            console.log('nnn ', rowData, rowState);
        },
    }


    // const data = [
    //     ["Gabby George", "Business Analyst", "Minneapolis"],
    //     [
    //         "Aiden Lloyd",
    //         "Business Consultant for an International Company and CEO of Tony's Burger Palace",
    //         "Dallas"
    //     ],
    //     ["Jaden Collins", "Attorney", "Santa Ana"],
    //     ["Franky Rees", "Business Analyst", "St. Petersburg"],
    //     ["Aaren Rose", null, "Toledo"],
    //     ["Johnny Jones", "Business Analyst", "St. Petersburg"],
    //     ["Jimmy Johns", "Business Analyst", "Baltimore"],
    //     ["Jack Jackson", "Business Analyst", "El Paso"],
    //     ["Joe Jones", "Computer Programmer", "El Paso"],
    //     ["Jacky Jackson", "Business Consultant", "Baltimore"],
    //     ["Jo Jo", "Software Developer", "Washington DC"],
    //     ["Donna Marie", "Business Manager", "Annapolis"]
    // ];

    const data = [
        { system_number: "+12085630521", customer_number: "+919742431424" },
        { system_number: "+12085630521", customer_number: "+919742431424" },
        { system_number: "+12085630521", customer_number: "+919742431424" },
        { system_number: "+12085630521", customer_number: "+919742431424" },
    ]

    console.log('nnn data array : ', data);

    const TableHeader = () => {
        return (
            <div style={{ color: "red" }}>
                <h1>nnn</h1>
            </div>
        );
    };

    return (
        <React.Fragment>
            <MUIDataTable
                title={TableHeader()}
                data={data}
                columns={columns}
                options={options}
            />
        </React.Fragment>
    );
}

export default Body;