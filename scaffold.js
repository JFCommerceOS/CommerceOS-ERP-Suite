const fs = require('fs');
const path = require('path');

const phase1Modules = [
  {
    path: 'foundation/organization',
    title: '1.1 Organization and Legal Structure',
    description: 'Submodules: Company, Branch, Business unit, Warehouse/location, Department, Cost center, Profit center, Project/job dimension, Intercompany mapping\nAI role: Setup validation, Missing control detection, Duplicate structure detection, Suggested dimension model'
  },
  {
    path: 'foundation/master_data',
    title: '1.3 Master Data Governance',
    description: 'Submodules: Customer master, Vendor master, Item/service master, UOM, Price lists, Payment terms, Bank master, Employee master, Asset categories, Tax code master, Approval matrix master\nAI role: Duplicate detection, Missing-field checks, Suspicious bank/vendor changes, Classification suggestions, Data quality scoring'
  },
  {
    path: 'commercial/pos_sales',
    title: '2.1 POS and Direct Sales',
    description: 'Submodules: Cashier screen, Basket/cart, Pricing and discounts, Promotion engine, Returns/refunds, Payment capture, Shift/cash drawer, Receipt/invoice issuance\nAI role: Item/promo suggestion, Wrong-price warning, Suspicious void/refund detection, Cart add-on suggestions, Data-entry correction hints'
  },
  {
    path: 'procurement/purchasing',
    title: '3.1 Requisition to Purchase Order',
    description: 'Submodules: Purchase requisition, RFQ, Quote comparison, Supplier selection, Purchase order, Blanket order/contract, Budget check\nAI role: Quote comparison, Price anomaly detection, Suggested supplier ranking, Contract use reminders, Budget risk alerts'
  },
  {
    path: 'inventory/stock_control',
    title: '4.1 Item and Stock Control',
    description: 'Submodules: Stock ledger, Warehouses, Bins/locations, Batch/lot/serial, Expiry tracking, Reorder rules, Safety stock\nAI role: Stockout prediction, Overstock/slow-moving detection, Near-expiry alerts, Negative stock prevention, Suggested reorder quantities'
  },
  {
    path: 'finance/gl',
    title: '5.1 General Ledger',
    description: 'Submodules: Journal entries, Recurring journals, Reversals, Adjusting entries, Dimension-based posting, Closing entries, Reclassification\nAI role: Draft journals, Account suggestions, Unusual journal detection, Period/cut-off warnings, Narrative explanation of postings'
  },
  {
    path: 'finance/ar',
    title: '5.2 Accounts Receivable',
    description: 'Submodules: Customer invoices, Receipts, Credit notes, Aging, Collections, Bad debt/provision support, Customer statement\nAI role: Collection prioritization, Dispute-risk alerts, Suggested follow-up text, Late-payment prediction, Duplicate receipt mismatch alerts'
  },
  {
    path: 'finance/ap',
    title: '5.3 Accounts Payable',
    description: 'Submodules: Vendor bills, Payments, Aging, Payment batches, Advance payments, Vendor credit notes, AP accruals\nAI role: Payment prioritization, Early-payment discount detection, Duplicate bill warning, Vendor anomaly alerts, Suggested accrual drafts'
  },
  {
    path: 'finance/bank_cash',
    title: '5.4 Bank and Cash Management',
    description: 'Submodules: Bank accounts, Bank statements, Reconciliation, Cashbook, Petty cash, Transfer management, Payment file/export\nAI role: Bank reconciliation suggestions, Unusual transaction alerts, Cash shortfall forecasting, Bank-fee classification assistance'
  },
  {
    path: 'finance/tax',
    title: '5.5 Tax Engine and Compliance Accounting',
    description: 'Submodules: Tax codes, Tax groups, Fiscal positions, VAT/GST/Sales tax, Withholding tax, Tax adjustments, Filing workpapers, E-invoice/e-document readiness\nAI role: Tax-code proposals, Inconsistent treatment detection, Missing tax invoice warning, Filing risk summary, Tax anomaly review queues'
  },
  {
    path: 'workflow/documents',
    title: '8.2 Document Management',
    description: 'Submodules: Document inbox, OCR intake, Attachments, Search, Version history, Retention, Evidence packs, Contract/document links\nAI role: OCR extraction, document classification, transaction matching, missing support alerts, audit pack assembly'
  },
  {
    path: 'ai_fabric/entry_guard',
    title: '10.1 Entry Guard AI',
    description: 'Stops bad data early. Wrong field combinations, suspicious quantities/prices, missing mandatory support, duplicate records.'
  },
  {
    path: 'ai_fabric/process_guard',
    title: '10.2 Process Guard AI',
    description: 'Checks sequence and completeness. Missing approval, missing receipt before bill, wrong next step, overdue workflow.'
  }
];

phase1Modules.forEach(mod => {
  const fullPath = path.join(__dirname, mod.path);
  fs.mkdirSync(fullPath, { recursive: true });
  
  const readmeContent = `# ${mod.title}\n\n## Overview\n${mod.description}\n\n## Current Status\n- Scaffolded for Phase 1 implementation.\n`;
  fs.writeFileSync(path.join(fullPath, 'README.md'), readmeContent);
  // Also create a basic module placeholder file
  fs.writeFileSync(path.join(fullPath, 'index.ts'), `// Entry point for ${mod.title}\n\nexport const init = () => {\n  console.log('Initializing ${mod.title}');\n};\n`);
});

console.log('Phase 1 project scaffolding completed successfully.');
