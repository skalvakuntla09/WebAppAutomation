import LoginPage from '../pageobjects/login.page'
import DashboardPage from '../pageobjects/dashboard.page'

const testDataObject = require('../support/testdata/Standard_Document_Upload_Actions.json');

describe('Upload Standard Document And Perform Actions: ', () => {
        
        it('login into application', () => {
            LoginPage.open();
            LoginPage.loginSuccess(testDataObject.email, testDataObject.password);
        })

        it('select document upload option from dashboard', () => {
            DashboardPage.clickDocumentUpload();
        });

        it('upload standard document', () => {
            DashboardPage.uploadDocumentSuccessful(testDataObject.documentLocation);
            DashboardPage.closeDocumentFrame();
        });

        it('select documents from left navigation panel', () => {
            DashboardPage.selectAllDocumentsFromLeftNav();
            DashboardPage.clickonUploadedDocument();
        });

        it('mark document as paid', () => {
            DashboardPage.markAsPaid();
        });

        it('unmark document as paid', () => {
            DashboardPage.unMarkAsPaid();
        });

        it('add notes to document', () => {
            DashboardPage.addNotesToTheDocument(testDataObject.notes);
        });

        it('download document', () => {
            DashboardPage.clickDownloadDocument();
        });

        it('edit document', () => {
            DashboardPage.editDocument();
            DashboardPage.enterTransactionDetails(testDataObject.documentType, testDataObject.suplier, testDataObject.invoiceNumber, testDataObject.date, testDataObject.amount);
        });

        it('assert document details', () => {
            DashboardPage.assertDocumentDetails(testDataObject.suplier, testDataObject.date);
        });

        it('delete document', () => {
            DashboardPage.deleteSelectedDocument();
        });
})
