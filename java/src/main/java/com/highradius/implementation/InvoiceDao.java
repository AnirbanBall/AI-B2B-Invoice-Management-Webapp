package com.highradius.implementation;

import com.highradius.model.Invoice;
import java.util.List;

public interface InvoiceDao {
    List<Invoice> getInvoice() throws ClassNotFoundException;
    
    void insertInvoice(Invoice invoice) throws ClassNotFoundException;
    
    void updateInvoice(String id, Invoice invoice);
    
    void deleteInvoice(String id);
}