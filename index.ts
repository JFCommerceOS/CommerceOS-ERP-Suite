import { init as initOrganization } from './foundation/organization';
import { init as initMasterData } from './foundation/master_data';
import { init as initPosSales } from './commercial/pos_sales';
import { init as initPurchasing } from './procurement/purchasing';
import { init as initStockControl } from './inventory/stock_control';
import { init as initGL } from './finance/gl';
import { init as initAR } from './finance/ar';
import { init as initAP } from './finance/ap';
import { init as initBankCash } from './finance/bank_cash';
import { init as initTax } from './finance/tax';
import { init as initDocuments } from './workflow/documents';
import { init as initEntryGuard } from './ai_fabric/entry_guard';
import { init as initProcessGuard } from './ai_fabric/process_guard';

import { init as initReconciliation } from './ai_fabric/reconciliation';
import { init as initCloseManager } from './finance/close_manager';
import { init as initFixedAssets } from './finance/fixed_assets';
import { init as initAccruals } from './finance/accruals';
import { init as initBudgeting } from './finance/budgeting';
import { init as initApprovals } from './workflow/approvals';
import { init as initOperationalReporting } from './reporting/operational';
import { init as initReportingAI } from './ai_fabric/reporting';
import { init as initAuditAI } from './ai_fabric/audit';

import { init as initIntercompany } from './finance/intercompany';
import { init as initMovements } from './inventory/movements';
import { init as initEmployeeCore } from './workforce/employee_core';
import { init as initPayroll } from './workforce/payroll';
import { init as initServiceOps } from './service/operations';
import { init as initProjects } from './service/projects';
import { init as initSectorOverlays } from './sectors/overlays';

import { init as initExceptionAI } from './ai_fabric/exception';
import { init as initCloseAI } from './ai_fabric/close';
import { init as initFinancialReporting } from './reporting/financial';
import { init as initAuditCompliance } from './reporting/audit_compliance';
import { init as initSalesInvoicing } from './commercial/sales_invoicing';
import { init as initCRM } from './commercial/crm';
import { init as initReceiving } from './procurement/receiving';
import { init as initSupplierMgmt } from './procurement/supplier_mgmt';

console.log('--- Starting CommerceOS ERP Suite ---');

console.log('\n[Phase 1] Initialization');
initOrganization();
initMasterData();
initPosSales();
initPurchasing();
initStockControl();
initGL();
initAR();
initAP();
initBankCash();
initTax();
initDocuments();
initEntryGuard();
initProcessGuard();

console.log('\n[Phase 2] Initialization');
initReconciliation();
initCloseManager();
initFixedAssets();
initAccruals();
initBudgeting();
initApprovals();
initOperationalReporting();
initReportingAI();
initAuditAI();

console.log('\n[Phase 3] Initialization');
initIntercompany();
initMovements();
initEmployeeCore();
initPayroll();
initServiceOps();
initProjects();
initSectorOverlays();

console.log('\n[Phase 4] Initialization');
initExceptionAI();
initCloseAI();
initFinancialReporting();
initAuditCompliance();
initSalesInvoicing();
initCRM();
initReceiving();
initSupplierMgmt();

console.log('\n--- CommerceOS ERP Suite Initialized Successfully ---');
