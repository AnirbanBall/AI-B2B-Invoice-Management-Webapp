import { DataGrid, GridPagination } from "@mui/x-data-grid";
import "./App.css";
import React from "react";
import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Adddata from "./Adddata";
import EditDialog from "./EditDialogbox";
import DeleteDialog from "./DeleteDialogbox";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#666666", // Set your desired primary color
    },
    secondary: {
      main: "#fc7500",
    },
  },
});

const columns = [
  {
    field: "id",
    headerName: "SI No",
    width: 100,
    headerClassName: "header-cell",
    cellClassName: "data-cell",
  },
  {
    field: "customerOrderId",
    headerName: "CUSTOMER ORDER ID",
    width: 200,
    headerClassName: "header-cell",
    cellClassName: "data-cell",
  },
  {
    field: "salesOrg",
    headerName: "SALES ORG",
    width: 150,
    headerClassName: "header-cell",
    cellClassName: "data-cell",
  },
  {
    field: "distributionChannel",
    headerName: "DISTRIBUTION CHANNEL",
    width: 200,
    headerClassName: "header-cell",
    cellClassName: "data-cell",
  },
  {
    field: "companyCode",
    headerName: "COMPANY CODE",
    width: 150,
    headerClassName: "header-cell",
    cellClassName: "data-cell",
  },
  {
    field: "orderCreationDate",
    headerName: "ORDER CREATION DATE",
    width: 200,
    headerClassName: "header-cell",
    cellClassName: "data-cell",
  },
  {
    field: "orderAmount",
    headerName: "ORDER AMOUNT",
    width: 150,
    headerClassName: "header-cell",
    cellClassName: "data-cell",
  },
  {
    field: "orderCurrency",
    headerName: "ORDER CURRENCY",
    width: 150,
    headerClassName: "header-cell",
    cellClassName: "data-cell",
  },
  {
    field: "customerNumber",
    headerName: "CUSTOMER NUMBER",
    width: 200,
    headerClassName: "header-cell",
    cellClassName: "data-cell",
  },
  {
    field: "amountInUSD",
    headerName: "AMOUNT IN USD",
    width: 150,
    headerClassName: "header-cell",
    cellClassName: "data-cell",
  },
];

const rows = [
  {
    id: 1,
    customerOrderId: 754349803,
    salesOrg: 3911,
    distributionChannel: "United Arab Emirates",
    companyCode: 3290,
    orderCreationDate: "01-01-2022",
    orderAmount: 1405.54,
    orderCurrency: "AED",
    customerNumber: 121049970,
    amountInUSD: 892.525,
  },
  {
    id: 2,
    customerOrderId: 930253442,
    salesOrg: 2381,
    distributionChannel: "Greece",
    companyCode: 3290,
    orderCreationDate: "01-01-2022",
    orderAmount: 1441.4835,
    orderCurrency: "EUR",
    customerNumber: 1210351400,
    amountInUSD: 76508.336,
  },
  {
    id: 3,
    customerOrderId: 819741436,
    salesOrg: 3605,
    distributionChannel: "Argentina",
    companyCode: 3290,
    orderCreationDate: "01-01-2022",
    orderAmount: 1065.33,
    orderCurrency: "EUR",
    customerNumber: 1210124309,
    amountInUSD: 1593.273,
  },
  {
    id: 4,
    customerOrderId: 881355361,
    salesOrg: 3645,
    distributionChannel: "Armenia",
    companyCode: 3470,
    orderCreationDate: "02-01-2022",
    orderAmount: 302.85,
    orderCurrency: "EUR",
    customerNumber: 12311152,
    amountInUSD: 0,
  },
  {
    id: 5,
    customerOrderId: 821659852,
    salesOrg: 2470,
    distributionChannel: "United States of America",
    companyCode: 3220,
    orderCreationDate: "02-01-2022",
    orderAmount: 8380.69,
    orderCurrency: "EUR",
    customerNumber: 1230021722,
    amountInUSD: 1207.62,
  },
  {
    id: 6,
    customerOrderId: 957194828,
    salesOrg: 3150,
    distributionChannel: "United States Minor Outlying Islands",
    companyCode: 3290,
    orderCreationDate: "02-01-2022",
    orderAmount: 545.85,
    orderCurrency: "EUR",
    customerNumber: 1210183107,
    amountInUSD: 343.593,
  },
  {
    id: 7,
    customerOrderId: 806322513,
    salesOrg: 3396,
    distributionChannel: "Serbia",
    companyCode: 3290,
    orderCreationDate: "02-01-2022",
    orderAmount: 545.85,
    orderCurrency: "EUR",
    customerNumber: 1210499770,
    amountInUSD: 9508.17216133333,
  },
  {
    id: 8,
    customerOrderId: 922237131,
    salesOrg: 2353,
    distributionChannel: "Turks and Caicos Islands",
    companyCode: 3290,
    orderCreationDate: "02-01-2022",
    orderAmount: 562.73,
    orderCurrency: "EUR",
    customerNumber: 1210111951,
    amountInUSD: 619.28502,
  },
];

export default function Datagrid() {
  const [tabValue, setTabValue] = useState(0);
  const [pageSize, setPageSize] = React.useState(5);
  const [isDeleteButtonEnabled, setIsDeleteButtonEnabled] = useState(false);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [isEditButtonEnabled, setIsEditButtonEnabled] = useState(false);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleCheckboxSelection = (selection) => {
    const selectedCheckboxIds = selection.selectionModel;
    setSelectedRowIds(selectedCheckboxIds);

    if (selectedCheckboxIds && selectedCheckboxIds.length > 0) {
      setIsDeleteButtonEnabled(true);
    } else {
      setIsDeleteButtonEnabled(false);
    }

    if (selectedCheckboxIds && selectedCheckboxIds.length === 1) {
      setIsEditButtonEnabled(true);
    } else {
      setIsEditButtonEnabled(false);
    }
  };

  const handleEditClick = () => {
    if (selectedRowIds.length === 1) {
      // Open the popup window with pre-populated data of the selected row
      const selectedRowId = selectedRowIds[0];
      const selectedRow = rows.find((row) => row.id === selectedRowId);
      if (selectedRow) {
        // Pre-populate the data in the popup window
        console.log("Selected Row:", selectedRow);
        setIsRowSelected(true);
        setSelectedRowIds(selectedRow);
        setIsEditDialogOpen(true);
      }
    }
  };

  const handleDeleteClick = () => {
    if (selectedRowIds.length > 0) {
      setIsDeleteDialogOpen(true);
    }
  };

  const handleEditDialogClose = () => {
    setIsEditDialogOpen(false);
  };

  const handleDeleteDialogClose = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const CustomFooter = () => (
    <div className="custom-footer" style={{ height: "70px" }}>
      <div className="button-container">
        <Button
          variant="contained"
          color="secondary"
          style={{
            marginRight: "10px",
            marginTop: "10px",
            marginLeft: "10px",
            backgroundColor: "#fc7500",
            color: "white",
          }}
        >
          Refresh
        </Button>
        <Button
          variant="contained"
          color={isRowSelected ? "secondary" : "secondary"}
          disabled={!isEditButtonEnabled}
          onClick={handleEditClick}
          style={{ marginRight: "10px", marginTop: "10px", color: "white" }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color={isRowSelected ? "secondary" : "secondary"}
          disabled={!isDeleteButtonEnabled}
          onClick={handleDeleteClick}
          style={{
            marginRight: "10px",
            marginTop: "10px",
            color: "white",
          }}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color={isRowSelected ? "secondary" : "secondary"}
          disabled={!isEditButtonEnabled}
          onClick={handleEditClick}
          style={{ marginRight: "10px", marginTop: "10px", color: "white" }}
        >
          Predict
        </Button>
      </div>
      <div className="pagination-container" style={{ marginBottom: "10px" }}>
        <GridPagination />
      </div>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="table-props">
        <AppBar
          position="static"
          style={{ backgroundColor: "#666666", height: "55px" }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            TabIndicatorProps={{ style: { backgroundColor: "gray" } }}
          >
            <Tab
              label="HOME PAGE"
              style={{
                backgroundColor: tabValue === 0 ? "gray" : "transparent",
                height: "55px",
              }}
            />
            <Tab
              label="ADD DATA"
              style={{
                backgroundColor: tabValue === 1 ? "gray" : "transparent",
              }}
            />
            <Tab
              label="ANALYTICS VIEW"
              style={{
                backgroundColor: tabValue === 2 ? "gray" : "transparent",
              }}
            />
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <input
                type="text"
                placeholder="Search Customer Order ID"
                style={{
                  marginRight: "8px",
                  width: "170px",
                  height: "35px",
                  borderRadius: "6px",
                  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              />
              <button
                style={{
                  width: "85px",
                  height: "43px",
                  whiteSpace: "normal",
                  backgroundColor: "#8fd163",
                  color: "gray",
                  borderRadius: "6px",
                }}
              >
                ADVANCED SEARCH
              </button>
            </div>
          </Tabs>
        </AppBar>

        {tabValue === 0 && (
          <div style={{ height: 450, width: "100%" }}>
            <style>
              {`
            
            .custom-footer {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 8px;
              color: white;
            }
          
             .pagination-container {
               margin-left: auto;
               color: white;
             }
          `}
            </style>
            <DataGrid
              style={{ height: 450, width: "100%" }}
              rows={rows}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20]}
              checkboxSelection
              disableSelectionOnClick
              disableColumnMenu
              components={{
                Footer: CustomFooter,
              }}
              onSelectionModelChange={(selectionModel) =>
                handleCheckboxSelection({ selectionModel })
              }
            />
          </div>
        )}
        {tabValue === 1 && <Adddata />}
      </div>
      <EditDialog
        isOpen={isEditDialogOpen}
        onClose={handleEditDialogClose}
        selectedRow={selectedRowIds}
      />
      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={handleDeleteDialogClose}
        selectedRows={selectedRowIds}
      />
    </ThemeProvider>
  );
}
