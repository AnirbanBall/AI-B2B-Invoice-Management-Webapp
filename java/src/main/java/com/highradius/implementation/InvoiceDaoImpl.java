package com.highradius.implementation;

import com.highradius.connection.DatabaseConnection;
import com.highradius.model.Invoice;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class InvoiceDaoImpl implements InvoiceDao {
	private DatabaseConnection databaseConnection;

    public InvoiceDaoImpl() {
        databaseConnection = new DatabaseConnection();
    }

    @Override
    public List<Invoice> getInvoice() throws ClassNotFoundException {
        return databaseConnection.getInvoices();
    }
 
    @Override
    public void insertInvoice(Invoice invoice) throws ClassNotFoundException {
        databaseConnection.addInvoice(invoice);
    }

    @Override
    public void updateInvoice(String id, Invoice invoice) {
        Connection connection = null;
        PreparedStatement statement = null;

        try {
            // Get a database connection
            connection = DatabaseConnection.getConnection();

            // Create the SQL query to update the invoice data
            String sql = "UPDATE h2h_oap SET " +
                    "CUSTOMER_ORDER_ID = ?, " +
                    "SALES_ORG = ?, " +
                    "DISTRIBUTION_CHANNEL = ?, " +
                    "DIVISION = ?, " +
                    "RELEASED_CREDIT_VALUE = ?, " +
                    "PURCHASE_ORDER_TYPE = ?, " +
                    "COMPANY_CODE = ?, " +
                    "ORDER_CREATION_DATE = ?, " +
                    "ORDER_CREATION_TIME = ?, " +
                    "CREDIT_CONTROL_AREA = ?, " +
                    "SOLD_TO_PARTY = ?, " +
                    "ORDER_AMOUNT = ?, " +
                    "REQUESTED_DELIVERY_DATE = ?, " +
                    "ORDER_CURRENCY = ?, " +
                    "CREDIT_STATUS = ?, " +
                    "CUSTOMER_NUMBER = ?, " +
                    "AMOUNT_IN_USD = ?, " +
                    "UNIQUE_CUST_ID = ? " +
                    "WHERE CUSTOMER_ORDER_ID = ?";

            // Prepare the statement
            statement = connection.prepareStatement(sql);

            // Set the parameter values for the SQL query
            statement.setInt(1, invoice.getCustomerOrderID());
            statement.setInt(2, invoice.getSalesOrg());
            statement.setString(3, invoice.getDistributionChannel());
            statement.setString(4, invoice.getDivision());
            statement.setFloat(5, invoice.getReleasedCreditValue());
            statement.setString(6, invoice.getPurchaseOrderType());
            statement.setInt(7, invoice.getCompanyCode());
            statement.setString(8, invoice.getOrderCreationDate());
            statement.setString(9, invoice.getOrderCreationTime());
            statement.setString(10, invoice.getCreditControlArea());
            statement.setInt(11, invoice.getSoldToParty());
            statement.setFloat(12, invoice.getOrderAmount());
            statement.setString(13, invoice.getRequestedDeliveryDate());
            statement.setString(14, invoice.getOrderCurrency());
            statement.setString(15, invoice.getCreditStatus());
            statement.setInt(16, invoice.getCustomerNumber());
            statement.setFloat(17, invoice.getAmountInUsd());
            statement.setLong(18, invoice.getUniqueCustNumber());
            statement.setInt(19, invoice.getCustomerOrderID());

            // Execute the query to update the invoice data
            int rowsAffected = statement.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Invoice updated successfully.");
            } else {
                System.out.println("Failed to update the invoice.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // Close the resources
            try {
                if (statement != null)
                    statement.close();
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    public void deleteInvoice(String id) {
        Connection connection = null;
        PreparedStatement statement = null;

        try {
            // Get a database connection
            connection = DatabaseConnection.getConnection();

            // Create the SQL query to delete the invoice
            String sql = "DELETE FROM h2h_oap WHERE CUSTOMER_ORDER_ID = ?";

            // Prepare the statement
            statement = connection.prepareStatement(sql);

            // Set the parameter value for the SQL query
            statement.setString(1, id);

            // Execute the query to delete the invoice
            int rowsAffected = statement.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Invoice deleted successfully.");
            } else {
                System.out.println("Failed to delete the invoice.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // Close the resources
            try {
                if (statement != null)
                    statement.close();
                if (connection != null)
                    connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

}