# CommerceOS ERP Suite — Formal Hierarchy Tree

## 0. Platform spine
This is the system-wide foundation that every module sits on.

### 0.1 Core platform services
- Identity and access
- Role-based permissions
- Branch/entity/company context
- Audit log engine
- Notification engine
- Workflow engine
- Document service
- API/integration bus
- AI orchestration layer
- Rules/policy engine
- Reporting/data warehouse layer

**AI role:** User guidance by role, Permission-aware recommendations, Cross-module anomaly correlation, Proactive alerts, Workload prioritization  
**Approval level:** System-level governance only  
**Accounting impact:** Indirect but critical, because this controls trust, traceability, and execution discipline  

## 1. Foundation and governance layer

### 1.1 Organization and legal structure
**Submodules:** Company, Branch, Business unit, Warehouse/location, Department, Cost center, Profit center, Project/job dimension, Intercompany mapping  
**AI role:** Setup validation, Missing control detection, Duplicate structure detection, Suggested dimension model  
**Approval level:** Controlled by finance/admin  
**Accounting impact:** Direct; drives posting dimensions, reporting, consolidation, and control scope  

### 1.2 Fiscal and accounting setup
**Submodules:** Chart of accounts, Journals, Fiscal periods, Tax periods, Currency and FX setup, Accounting books / reporting basis, Posting policies, Lock dates, Materiality thresholds  
**AI role:** COA mapping suggestions, Tax setup validation, Period control warnings, Policy gap detection  
**Approval level:** Finance controller / admin only  
**Accounting impact:** Direct backbone of the whole ERP  

### 1.3 Master data governance
**Submodules:** Customer master, Vendor master, Item/service master, UOM, Price lists, Payment terms, Bank master, Employee master, Asset categories, Tax code master, Approval matrix master  
**AI role:** Duplicate detection, Missing-field checks, Suspicious bank/vendor changes, Classification suggestions, Data quality scoring  
**Approval level:** Shared; major changes need review  
**Accounting impact:** Direct; poor master data creates downstream financial error  

## 2. Commercial operations layer

### 2.1 POS and direct sales
**Submodules:** Cashier screen, Basket/cart, Pricing and discounts, Promotion engine, Returns/refunds, Payment capture, Shift/cash drawer, Receipt/invoice issuance  
**AI role:** Item/promo suggestion, Wrong-price warning, Suspicious void/refund detection, Cart add-on suggestions, Data-entry correction hints  
**Approval level:** Low-risk auto guidance; exceptions escalate  
**Accounting impact:** Sales revenue, VAT/GST/output tax, Cash/bank, AR if on account, Inventory and COGS  

### 2.2 Sales order and invoicing
**Submodules:** Quotations, Sales orders, Delivery/fulfillment, Invoicing, Credit notes, Customer pricing, Customer credit control  
**AI role:** Margin warning, Delivery/invoice mismatch detection, Credit-risk signals, Suggested invoice timing, Revenue-risk alerts  
**Approval level:** Normal sales flow + credit overrides  
**Accounting impact:** Revenue, AR, Tax, Inventory movement/COGS where applicable  

### 2.3 CRM and customer relationship
**Submodules:** Leads, Opportunities, Contact history, Customer segmentation, Follow-ups, Complaints/cases, Collections notes  
**AI role:** Lead prioritization, Churn-risk prediction, Follow-up drafting, Collections guidance, Upsell/cross-sell recommendations  
**Approval level:** Mostly guided, not approval-heavy  
**Accounting impact:** Indirect at lead stage; direct when tied to quotation, order, invoicing, collection  

## 3. Procurement and supply layer

### 3.1 Requisition to purchase order
**Submodules:** Purchase requisition, RFQ, Quote comparison, Supplier selection, Purchase order, Blanket order/contract, Budget check  
**AI role:** Quote comparison, Price anomaly detection, Suggested supplier ranking, Contract use reminders, Budget risk alerts  
**Approval level:** Threshold-based procurement approval  
**Accounting impact:** Usually pre-accounting until commitment tracking; budget/control impact  

### 3.2 Receiving and vendor billing
**Submodules:** Goods receipt, Service receipt, GRN, Vendor bill, Debit note, 2-way/3-way matching, Withholding tax handling  
**AI role:** Duplicate invoice detection, PO/GRN/bill match assistance, Missing support detection, Tax-code suggestion, Unusual vendor change alerts  
**Approval level:** Semi-automated; human approval for posting/payment-sensitive items  
**Accounting impact:** AP, Inventory/expense/asset capitalization, Input tax, Accruals, Withholding  

### 3.3 Supplier management
**Submodules:** Supplier profile, SLA/performance, Price history, Risk flags, Bank detail controls, Contract repository  
**AI role:** Supplier risk scoring, Bank-detail fraud alerts, Performance summary, Spend concentration alerts  
**Approval level:** Controlled for high-risk updates  
**Accounting impact:** Indirect but high control importance  

## 4. Inventory and warehouse layer

### 4.1 Item and stock control
**Submodules:** Stock ledger, Warehouses, Bins/locations, Batch/lot/serial, Expiry tracking, Reorder rules, Safety stock  
**AI role:** Stockout prediction, Overstock/slow-moving detection, Near-expiry alerts, Negative stock prevention, Suggested reorder quantities  
**Approval level:** Mostly guided; critical adjustments need approval  
**Accounting impact:** Inventory valuation, COGS timing, Wastage/write-off exposure  

### 4.2 Stock movement and adjustments
**Submodules:** Transfers, In-transit stock, Adjustments, Write-offs, Returns to vendor, Customer returns restock logic, Landed cost allocation  
**AI role:** Transfer imbalance detection, Shrinkage anomaly detection, Suggested adjustment cause, Landed-cost allocation assistance  
**Approval level:** Adjustments and write-offs need review  
**Accounting impact:** Inventory, COGS, Stock variance, Expense/write-off  

## 5. Finance and accounting layer

### 5.1 General ledger
**Submodules:** Journal entries, Recurring journals, Reversals, Adjusting entries, Dimension-based posting, Closing entries, Reclassification  
**AI role:** Draft journals, Account suggestions, Unusual journal detection, Period/cut-off warnings, Narrative explanation of postings  
**Approval level:** Draft/suggest; material journals need approval  
**Accounting impact:** Direct core financial truth  

### 5.2 Accounts receivable
**Submodules:** Customer invoices, Receipts, Credit notes, Aging, Collections, Bad debt/provision support, Customer statement  
**AI role:** Collection prioritization, Dispute-risk alerts, Suggested follow-up text, Late-payment prediction, Duplicate receipt mismatch alerts  
**Approval level:** Normal ops + approval for write-offs/credit overrides  
**Accounting impact:** AR, Revenue corrections, Allowance/provision, Cash forecasting  

### 5.3 Accounts payable
**Submodules:** Vendor bills, Payments, Aging, Payment batches, Advance payments, Vendor credit notes, AP accruals  
**AI role:** Payment prioritization, Early-payment discount detection, Duplicate bill warning, Vendor anomaly alerts, Suggested accrual drafts  
**Approval level:** Semi-automated; payment release needs control  
**Accounting impact:** AP, Cash, Expenses/assets/inventory, Tax, Accruals  

### 5.4 Bank and cash management
**Submodules:** Bank accounts, Bank statements, Reconciliation, Cashbook, Petty cash, Transfer management, Payment file/export  
**AI role:** Bank reconciliation suggestions, Unusual transaction alerts, Cash shortfall forecasting, Bank-fee classification assistance  
**Approval level:** Reconciliation can be assisted; final sign-off controlled  
**Accounting impact:** Cash accuracy, Reconciliation quality, Fraud risk reduction  

### 5.5 Tax engine and compliance accounting
**Submodules:** Tax codes, Tax groups, Fiscal positions, VAT/GST/Sales tax, Withholding tax, Tax adjustments, Filing workpapers, E-invoice/e-document readiness  
**AI role:** Tax-code proposals, Inconsistent treatment detection, Missing tax invoice warning, Filing risk summary, Tax anomaly review queues  
**Approval level:** Semi-automated; filing/sign-off stays human-controlled  
**Accounting impact:** Direct statutory exposure  

### 5.6 Accruals, deferrals, and close adjustments
**Submodules:** Prepayments, Deferred revenue, Deferred expense, Accrued expense/revenue, Month-end schedules, Adjustment workflow  
**AI role:** Draft schedules, Missing accrual detection, Recurring month-end proposals, Cut-off exception alerts  
**Approval level:** Draft and recommend; finance review required  
**Accounting impact:** Direct close accuracy  

### 5.7 Fixed assets and capital accounting
**Submodules:** Asset register, Capitalization, Depreciation, Disposal, Transfer, Revaluation, Impairment workflow, CIP/AUC  
**AI role:** Expense vs capitalization guidance, Asset-class suggestions, Disposal anomaly alerts, Depreciation review prompts  
**Approval level:** Semi-automated; final accounting judgment controlled  
**Accounting impact:** PPE/asset balances, Depreciation expense, Gain/loss on disposal, Impairment exposure  

### 5.8 Budgeting and management control
**Submodules:** Operating budget, Capex budget, Department budgets, Revision/versioning, Budget vs actual, Approval thresholds  
**AI role:** Forecast hints, Variance explanation, Overspend alerts, Budget reallocation suggestions  
**Approval level:** Management-controlled  
**Accounting impact:** Indirect for budget; direct for control and decision support  

### 5.9 Intercompany and consolidation
**Submodules:** Intercompany balances, Due-to/due-from, Cross-entity transactions, Elimination entries, Consolidated statements, Group reporting dimensions  
**AI role:** Intercompany mismatch detection, Elimination draft support, Balance break investigation, Group variance summaries  
**Approval level:** High-control finance layer  
**Accounting impact:** Direct group reporting truth  

### 5.10 Period-end close manager
**Submodules:** Close calendar, Checklist, Reconciliation tracker, Review notes, Exception queue, Sign-off workflow  
**AI role:** Missing-task alerts, Unreconciled account prioritization, Close bottleneck escalation, Draft management commentary  
**Approval level:** High-control; AI assists but does not own close  
**Accounting impact:** Direct final reporting integrity  

## 6. Workforce and payroll layer

### 6.1 Employee and HR core
**Submodules:** Employee master, Contracts, Department assignment, Leave, Attendance/time, Claim/reimbursement links  
**AI role:** Missing-data alerts, Role inconsistency detection, Onboarding/offboarding checklist guidance  
**Approval level:** HR-controlled  
**Accounting impact:** Indirect until payroll/expense integration  

### 6.2 Payroll
**Submodules:** Payroll inputs, Earnings/deductions, Allowances, Overtime, Leave effect, Payroll journal posting, Payslips, Statutory deductions  
**AI role:** Variance analysis, Overtime anomaly detection, Missing input alerts, Payroll exception summaries  
**Approval level:** Semi-automated; final payroll approval human-only  
**Accounting impact:** Payroll expense, Accruals, Liabilities, Tax/social deductions  

## 7. Service, projects, and sector overlays

### 7.1 Service operations
**Submodules:** Work orders, Appointments, Service billing, Consumables usage, Case management  
**AI role:** Missing billable item detection, Service productivity hints, Cost leakage alerts  
**Approval level:** Operational with manager exceptions  
**Accounting impact:** Revenue, Cost allocation, inventory/expense use  

### 7.2 Projects/jobs
**Submodules:** Project budget, Timesheets, Materials, Billing milestones, Job profitability  
**AI role:** Overrun alerts, Billing lag detection, Margin risk forecasting  
**Approval level:** Project/finance controlled  
**Accounting impact:** Revenue timing, WIP if used, profitability analysis  

### 7.3 Sector overlays
**Sectors:** Retail, F&B, Pharmacy, Clinic, Service, Hospitality  
**Rule:** Sector overlays change workflow and UI behavior, but do not break the common accounting/control backbone.  
**AI role:** Sector-specific guidance, compliance hints, operational recommendations  
**Approval level:** follows backbone rules  
**Accounting impact:** shared backbone with sector-specific operational triggers  

## 8. Workflow, documents, and evidence layer

### 8.1 Workflow and approvals
**Submodules:** Approval chains, Delegation, Threshold rules, Exception routing, SLA tracking, Escalation  
**AI role:** Next-approver suggestion, stuck-workflow alerts, approval-risk scoring, bypass detection  
**Approval level:** By design, this is the approval system  
**Accounting impact:** Direct control over transaction validity and governance  

### 8.2 Document management
**Submodules:** Document inbox, OCR intake, Attachments, Search, Version history, Retention, Evidence packs, Contract/document links  
**AI role:** OCR extraction, document classification, transaction matching, missing support alerts, audit pack assembly  
**Approval level:** document review where needed  
**Accounting impact:** Direct support for AP, tax, audit, close, and compliance  

## 9. Reporting, analytics, and executive layer

### 9.1 Operational reporting
**Submodules:** Sales dashboard, Inventory dashboard, Procurement dashboard, Service dashboard, Branch dashboard  
**AI role:** trend explanation, action recommendations, exception summaries  
**Approval level:** none, informational  
**Accounting impact:** indirect but critical for management control  

### 9.2 Financial reporting
**Submodules:** Trial balance, P&L, Balance sheet, Cash flow, AR/AP aging, Tax reports, Budget vs actual, management pack  
**AI role:** variance commentary, balance movement explanations, anomaly summaries, reporting narrative draft  
**Approval level:** report sign-off stays human-controlled  
**Accounting impact:** direct external/internal reporting  

### 9.3 Audit and compliance reporting
**Submodules:** audit trail reports, override logs, control exception logs, change history, tax working papers, filing support, compliance dashboards  
**AI role:** recurring issue detection, evidence compilation, suspicious behavior summaries, control-failure clustering  
**Approval level:** governed review  
**Accounting impact:** direct audit/compliance defensibility  

## 10. AI control fabric
This is the cross-module intelligence structure.

**10.1 Entry Guard AI**  
Stops bad data early. Wrong field combinations, suspicious quantities/prices, missing mandatory support, duplicate records.

**10.2 Process Guard AI**  
Checks sequence and completeness. Missing approval, missing receipt before bill, wrong next step, overdue workflow.

**10.3 Reconciliation AI**  
Matches and explains. Bank rec, PO/GRN/bill, invoice/payment, stock vs GL, intercompany.

**10.4 Exception AI**  
Handles anomalies. Detect, classify severity, explain likely cause, route to owner.

**10.5 Close AI**  
Supports period-end. Missing reconciliations, unusual journals, pending support, blocked close items.

**10.6 Reporting AI**  
Explains outcomes. Variance, trend, root-cause hints, commentary draft.

**10.7 Audit AI**  
Builds trust and evidence. Trace lifecycle, gather support, show overrides, flag repeated control failures.

## 11. AI action policy
Every AI function should be tagged with one of these action levels: 
- Guide
- Warn
- Suggest
- Draft
- Block
- Escalate
- Auto-run

**Auto-run only for low-risk bounded tasks**  
Examples: OCR extraction, document classification, duplicate checks, reminder sending, close task chasing, low-risk matching suggestions.

**Human-controlled for material decisions**  
Examples: final tax filing, period close sign-off, major journals, asset impairment, provisions, payroll release, consolidation sign-off.

## 12. Suggested implementation order

### Phase 1
Foundation, Master data, POS/sales, Purchasing, Inventory, GL/AP/AR, Bank/cash, Basic tax, Documents, Entry Guard AI, Process Guard AI

### Phase 2
Reconciliation AI, Close manager, Fixed assets, Deferrals/accruals, Budgeting, Stronger approvals, Reporting AI, Audit AI baseline

### Phase 3
Multi-company, Intercompany, Consolidation, Advanced warehouse, Payroll, Sector overlays maturity, Proactive AI agents

### Phase 4
Advanced tax/localization, Document intelligence expansion, Owner strategic AI, Predictive finance, autonomous low-risk workflows

---
**Final structure in one line:**  
CommerceOS ERP Suite = one accounting-first ERP backbone, layered with commerce operations, enterprise controls, document evidence, and role-based AI that prevents, detects, explains, drafts, escalates, and selectively automates work from first entry to final reporting.
