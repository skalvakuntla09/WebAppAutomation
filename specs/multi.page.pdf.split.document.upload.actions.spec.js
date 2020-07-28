import LoginPage from '../pageobjects/login.page'
import DashboardPage from '../pageobjects/dashboard.page'

const testDataObject = require('../support/testdata/Multi_Page_PDF_Split_Document_Upload_Actions.json');

describe('Multi Page PDF Split Document And Perform Actions: ', () => {

    it('login into application', () => {
        LoginPage.open();
        LoginPage.loginSuccess(testDataObject.email, testDataObject.password);
    })

    it('select document upload option from dashboard', () => {
        DashboardPage.clickDocumentUpload();
    });

    it('upload multi page PDF document', () => {
        DashboardPage.selectMultipPagePDFOption();
        DashboardPage.uploadDocumentSuccessful(testDataObject.documentLocation);
        DashboardPage.closeDocumentFrame();
    });
    it('select document from left panel', () => {
        DashboardPage.selectAllDocumentsFromLeftNav();
        DashboardPage.clickonUploadedDocument();
    });

    it('perfrom actions on each page/document like mark as paid, unmark as paid, add notes, download and delete document', () => {

        for (var i = 0; i < testDataObject.numberOfPages; i++) {

            //Mark document as paid
            DashboardPage.markAsPaid();

            //Unmark document as paid
            DashboardPage.unMarkAsPaid();

            //Add notes to document
            DashboardPage.addNotesToTheDocument(testDataObject.notes);

            //Download document
            DashboardPage.clickDownloadDocument();

            //Delete document', () => {
            DashboardPage.deleteSelectedDocument();
        }
    });
})
