package com.highradius.servlets;

import com.highradius.implementation.InvoiceDaoImpl;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import javax.servlet.annotation.WebServlet;

/**
 * Servlet implementation class DeleteServlet
 */
@WebServlet("/DeleteServlet")
public class DeleteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		InvoiceDaoImpl invoiceDaoImpl = new InvoiceDaoImpl();
		// Retrieve the customerOrderID of the invoice to delete
        int customerOrderID = Integer.parseInt(request.getParameter("customerOrderID"));

        // Delete the invoice from the database
        invoiceDaoImpl.deleteInvoice(String.valueOf(customerOrderID));

        // Set the response type
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");

        // Send the response
        response.getWriter().write("Invoice deleted successfully.");
	}

}

