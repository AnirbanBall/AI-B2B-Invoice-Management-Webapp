package com.highradius.connection;

import com.highradius.model.Invoice;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class DatabaseConnection {
    static ArrayList<Invoice> InvoicesList = new ArrayList<>();
    
    public Connection getConnection() throws ClassNotFoundException, SQLException {
    	final String url = "jdbc:mysql://localhost:3306/h2h";
    	final String user = "root";
    	final String pwd = "root";
    	Connection con = null;
    	try {
    		Class.forName("com.mysql.cj.jdbc.Driver");
    		con = DriverManager.getConnection(url,user,pwd);
    		System.out.println("Connected to database");
    	}
    	catch(SQLException | ClassNotFoundException e) {
    		e.printStackTrace();
    	}
    	return con;
    }

    public void addInvoice(Invoice inv) throws SQLException, ClassNotFoundException{
    	InvoicesList.add(inv);
    	DatabaseConnection dbObj = new DatabaseConnection();
    	Connection con = dbObj.getConnection();
    	String sqlQuery = "insert into h2h_oap (CUSTOMER_ORDER_ID, SALES_ORG, DISTRIBUTION_CHANNEL, DIVISION, RELEASED_CREDIT_VALUE, PURCHASE_ORDER_TYPE, COMPANY_CODE, ORDER_CREATION_DATE, ORDER_CREATION_TIME, CREDIT_CONTROL_AREA, SOLD_TO_PARTY, ORDER_AMOUNT, REQUESTED_DELIVERY_DATE, ORDER_CURRENCY, CREDIT_STATUS, CUSTOMER_NUMBER, AMOUNT_IN_USD, UNIQUE_CUST_ID) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    	PreparedStatement ps;
    	try {
    		ps = con.prepareStatement(sqlQuery);
    		ps.setInt(1, inv.getCUSTOMER_ORDER_ID());
			ps.setInt(2, inv.getSALES_ORG());
			ps.setString(3, inv.getDISTRIBUTION_CHANNEL());
			ps.setString(4, inv.getDIVISION());
			ps.setDouble(5, inv.getRELEASED_CREDIT_VALUE());
			ps.setString(6, inv.getPURCHASE_ORDER_TYPE());
			ps.setInt(7, inv.getCOMPANY_CODE());
			ps.setString(8, inv.getORDER_CREATION_DATE());
			ps.setString(9, inv.getORDER_CREATION_TIME());
			ps.setString(10, inv.getCREDIT_CONTROL_AREA());
			ps.setInt(11, inv.getSOLD_TO_PARTY());
			ps.setDouble(12, inv.getORDER_AMOUNT());
			ps.setString(13, inv.getREQUESTED_DELIVERY_DATE());
			ps.setString(14, inv.getORDER_CURRENCY());
			ps.setString(15, inv.getCREDIT_STATUS());
			ps.setInt(16, inv.getCUSTOMER_NUMBER());
			ps.setDouble(17, inv.getAMOUNT_IN_USD());
			ps.setLong(18, inv.getUNIQUE_CUST_ID());
			
			int rowsAffected = ps.executeUpdate();
			if(rowsAffected > 0) {
				System.out.println("Invoice added successfully");
			}
			else {
				System.out.println("Invoice can't be added");
			}
    	}
    	catch(SQLException e) {
    		e.printStackTrace();
    	}
    }
    
    public ArrayList<Invoice> getInvoices() throws SQLException, ClassNotFoundException {
    	Statement st;
    	ResultSet rs;
    	DatabaseConnection dbObj = new DatabaseConnection();
    	Connection con = dbObj.getConnection();
    	try {
    		st = con.createStatement();
    		String sqlQuery = "select * from h2h_oap";
    		rs = st.executeQuery(sqlQuery);
    		
    		while(rs.next()) {    			
    			int Sl_no = rs.getInt("Sl_no");
    		    int CUSTOMER_ORDER_ID = rs.getInt("CUSTOMER_ORDER_ID");
    		    int SALES_ORG = rs.getInt("SALES_ORG");
    		    String DISTRIBUTION_CHANNEL = rs.getString("DISTRIBUTION_CHANNEL");
    		    String DIVISION = rs.getString("DIVISION");
    		    double RELEASED_CREDIT_VALUE = rs.getDouble("RELEASED_CREDIT_VALUE");
    		    String PURCHASE_ORDER_TYPE = rs.getString("PURCHASE_ORDER_TYPE");
    		    int COMPANY_CODE = rs.getInt("COMPANY_CODE");
    		    String ORDER_CREATION_DATE = rs.getString("ORDER_CREATION_DATE");
    		    String ORDER_CREATION_TIME = rs.getString("ORDER_CREATION_TIME");
    		    String CREDIT_CONTROL_AREA = rs.getString("CREDIT_CONTROL_AREA");
    		    int SOLD_TO_PARTY = rs.getInt("SOLD_TO_PARTY");
    		    double ORDER_AMOUNT = rs.getDouble("ORDER_AMOUNT");
    		    String REQUESTED_DELIVERY_DATE = rs.getString("REQUESTED_DELIVERY_DATE");
    		    String ORDER_CURRENCY = rs.getString("ORDER_CURRENCY");
    		    String CREDIT_STATUS = rs.getString("ORDER_CURRENCY");
    		    int CUSTOMER_NUMBER = rs.getInt("CREDIT_STATUS");
    		    double AMOUNT_IN_USD = rs.getDouble("AMOUNT_IN_USD");
    		    long UNIQUE_CUST_ID = rs.getLong("UNIQUE_CUST_ID");
    		    
    			Invoice inv = new Invoice(Sl_no,CUSTOMER_ORDER_ID,SALES_ORG,DISTRIBUTION_CHANNEL,DIVISION,RELEASED_CREDIT_VALUE,PURCHASE_ORDER_TYPE,COMPANY_CODE,ORDER_CREATION_DATE,ORDER_CREATION_TIME,CREDIT_CONTROL_AREA,SOLD_TO_PARTY,ORDER_AMOUNT,REQUESTED_DELIVERY_DATE,ORDER_CURRENCY,CREDIT_STATUS,CUSTOMER_NUMBER,AMOUNT_IN_USD,UNIQUE_CUST_ID);
    			InvoicesList.add(inv);
    		}
    	}
    	catch(SQLException e) {
    		e.printStackTrace();
    	}
    	return InvoicesList;
    }
}
