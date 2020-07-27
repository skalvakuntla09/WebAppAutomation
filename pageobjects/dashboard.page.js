import Page from './page'
import Assert from '../support/assertions';
import { constants } from "../support/constants";

const path = require('path');

class DashboardPage extends Page {
    /**
     * define elements
     */
    get uploadDocument() { return $('#add-receipt') }

    get browseFileUpload() { return $('//*[@id="uploadifive-file-upload"]/input[2]') }
    get fileUploadComplete() { return $('.uploadifive-queue-item.complete') }
    get closeUploadFrame() { return $('.close-modal') }

    get clickAllDocumentsFromLeftNav() { return $('[title="All Documents"]') }

    get selectUploadedDoc() { return $('#document-items > div > a') }


    get clickAddTag() { return $('.add-tag-btn.btn-mini.btn-success') }
    get enterTagName() { return $('.add-tags') }

    get clickMarkAsPaid() { return $('#mark-as-paid') }

    get clickNotes() { return $('//*[@id="add-notes"]') }
    get addANote() { return $('//*[@id="notes"]/textarea') }
    get saveNote() { return $('//*[@id="notes"]/button') }
    get successfulNotesSaved() { return $('.note-save-status') }

    get downloadButton() { return $('[title="Download"]') }

    get clickEditDocument() { return $('//*[@id="editor-button"]/span/i') }

    get selectDocumentType() { return $('//*[@id="editor-document-type-div"]/div[1]/input') }
    get selectSupplier() { return $('//*[@id="editor-vendor-id-div"]/div[1]/input') }
    get enterInvoiceNumber() { return $('#editor-invoice-number') }
    get enterDate() { return $('#editor-bill-date') }
    get enterAmount() { return $('//*[@id="editor-amount"]') }
    get selectCurrency() { return $('//*[@id="editor-currency-div"]/div[1]/input') }

    get getDocumentDetails() { return $('.doc-details') }

    get deleteDocument() { return $('[title="Delete"]') }
    get clickConfirmOKToDeleteDocument() { return $('#modal-hook .btn.ok.btn-primary') }

    /**
     * define or overwrite page methods
     */

    //Click Document Upload button from the header
    clickDocumentUpload() {
        this.uploadDocument.waitForExist();
        this.uploadDocument.click();
    }

    //Upload documents form the pop-up
    uploadDocumentSuccessful(filePath) {
        const uploadDocPath = path.join(__dirname, filePath);
        this.browseFileUpload.waitForExist();
        this.browseFileUpload.setValue(uploadDocPath)
        this.fileUploadComplete.waitForExist();
    }

    //Close the document upload pop-up
    closeDocumentFrame() {
        this.closeUploadFrame.click();
    }

    //Click on all documents from the left panel
    selectAllDocumentsFromLeftNav() {
        this.clickAllDocumentsFromLeftNav.click();
    }

    //Select upload document 
    clickonUploadedDocument() {
        this.selectUploadedDoc.click();
    }

    //Add tag to the document
    addTagToTheDocument(tagName) {
        this.clickAddTag.click();
        this.enterTagName.setValue(tagName);
        browser.keys('Enter')
    }

    //Mark document/receipt as paid
    markAsPaid() {
        this.clickMarkAsPaid.click();
        expect(this.clickMarkAsPaid.getText()).to.equal(Assert.assertions.UNMARK_AS_PAID);
    }

    //Mark document/receipt as unpaid
    unMarkAsPaid() {
        this.clickMarkAsPaid.click();
        expect(this.clickMarkAsPaid.getText()).to.equal(Assert.assertions.MARK_AS_PAID);
    }

    //Add and save notes the uploaded document
    addNotesToTheDocument(note) {
        this.clickNotes.waitForExist();
        this.clickNotes.click();
        this.addANote.setValue(note);
        this.saveNote.click();
    }

    //Download the uploaded document
    clickDownloadDocument() {
        this.downloadButton.click();
    }

    //Edit the selected document
    editDocument() {
        this.clickEditDocument.click();
    }

    //Enter transaction details of the uploaded document
    enterTransactionDetails(documentType, suplier, invoiceNumber, date, amount) {
        this.selectDocumentType.waitForExist();
        this.selectDocumentType.click();
        this.selectDocumentType.addValue(documentType);
        browser.keys('Enter')
        this.selectSupplier.click();
        this.selectSupplier.addValue(suplier);
        browser.keys('Enter')
        this.enterInvoiceNumber.addValue(invoiceNumber);
        this.enterDate.setValue(date);
        browser.keys('Escape')
        this.enterAmount.doubleClick();
        browser.keys('Delete');
        this.enterAmount.setValue(amount);
        this.selectCurrency.click();
    }

    //Assert the document details entered form transaction detailss section
    assertDocumentDetails(suplier, date) {
        this.getDocumentDetails.waitForExist();
        
        const formattedDate = new Date(date).toLocaleString('en-us', { month: 'short', year: 'numeric', day: 'numeric' })
        const docDetails = this.getDocumentDetails.getText();
        
        expect(docDetails).to.include(suplier);
        expect(docDetails).to.include(formattedDate);
    }

    //Delete the document
    deleteSelectedDocument() {
        this.deleteDocument.click();
        this.clickConfirmOKToDeleteDocument.click();
    }

}

export default new DashboardPage()
