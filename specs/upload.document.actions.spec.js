import LoginPage from '../pageobjects/login.page'
import DashboardPage from '../pageobjects/dashboard.page'
import { constants } from "../support/constants";

const testDataObject = require('../support/testdata/Document_Upload_Actions.json');

describe('Upload Document Actions', () => {
    testDataObject.forEach(function (element) {
        
        before(function () {
            LoginPage.open();
            LoginPage.loginSuccess(element['email'], element['password']);
        })

        it('upload document', () => {
            DashboardPage.clickDocumentUpload();
            DashboardPage.uploadDocumentSuccessful(constants.IMAGE_FILE_PATH);
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
            DashboardPage.addNotesToTheDocument(element['notes']);
        });

        it('download document', () => {
            DashboardPage.clickDownloadDocument();
        });

        it('edit document', () => {
            DashboardPage.editDocument();
            DashboardPage.enterTransactionDetails(element['documentType'], element['suplier'], element['invoiceNumber'], element['date'], element['amount']);
        });

        it('assert document details', () => {
            DashboardPage.assertDocumentDetails(element['suplier'], element['date']);
        });

        it('delete document', () => {
            DashboardPage.deleteSelectedDocument();
        });
    });
})
