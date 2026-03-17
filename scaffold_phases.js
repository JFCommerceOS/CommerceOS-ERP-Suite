const fs = require('fs');
const path = require('path');

const phases = {
  phase2: [
    {
      path: 'ai_fabric/reconciliation',
      title: '10.3 Reconciliation AI',
      description: 'Matches and explains. Bank rec, PO/GRN/bill, invoice/payment, stock vs GL, intercompany.'
    },
    {
      path: 'finance/close_manager',
      title: '5.10 Period-end Close Manager',
      description: 'Submodules: Close calendar, Checklist, Reconciliation tracker, Review notes, Exception queue, Sign-off workflow\nAI role: Missing-task alerts, Unreconciled account prioritization, Close bottleneck escalation, Draft management commentary'
    },
    {
      path: 'finance/fixed_assets',
      title: '5.7 Fixed Assets and Capital Accounting',
      description: 'Submodules: Asset register, Capitalization, Depreciation, Disposal, Transfer, Revaluation, Impairment workflow, CIP/AUC\nAI role: Expense vs capitalization guidance, Asset-class suggestions, Disposal anomaly alerts, Depreciation review prompts'
    },
    {
      path: 'finance/accruals',
      title: '5.6 Accruals, Deferrals, and Close Adjustments',
      description: 'Submodules: Prepayments, Deferred revenue, Deferred expense, Accrued expense/revenue, Month-end schedules, Adjustment workflow\nAI role: Draft schedules, Missing accrual detection, Recurring month-end proposals, Cut-off exception alerts'
    },
    {
      path: 'finance/budgeting',
      title: '5.8 Budgeting and Management Control',
      description: 'Submodules: Operating budget, Capex budget, Department budgets, Revision/versioning, Budget vs actual, Approval thresholds\nAI role: Forecast hints, Variance explanation, Overspend alerts, Budget reallocation suggestions'
    },
    {
      path: 'workflow/approvals',
      title: '8.1 Workflow and Approvals',
      description: 'Submodules: Approval chains, Delegation, Threshold rules, Exception routing, SLA tracking, Escalation\nAI role: Next-approver suggestion, stuck-workflow alerts, approval-risk scoring, bypass detection'
    },
    {
      path: 'reporting/operational',
      title: '9.1 Operational Reporting',
      description: 'Submodules: Sales dashboard, Inventory dashboard, Procurement dashboard, Service dashboard, Branch dashboard\nAI role: trend explanation, action recommendations, exception summaries'
    },
    {
      path: 'ai_fabric/reporting',
      title: '10.6 Reporting AI',
      description: 'Explains outcomes. Variance, trend, root-cause hints, commentary draft.'
    },
    {
      path: 'ai_fabric/audit',
      title: '10.7 Audit AI',
      description: 'Builds trust and evidence. Trace lifecycle, gather support, show overrides, flag repeated control failures.'
    }
  ],
  phase3: [
    {
      path: 'finance/intercompany',
      title: '5.9 Intercompany and Consolidation',
      description: 'Submodules: Intercompany balances, Due-to/due-from, Cross-entity transactions, Elimination entries, Consolidated statements, Group reporting dimensions\nAI role: Intercompany mismatch detection, Elimination draft support, Balance break investigation, Group variance summaries'
    },
    {
      path: 'inventory/movements',
      title: '4.2 Stock Movement and Adjustments',
      description: 'Submodules: Transfers, In-transit stock, Adjustments, Write-offs, Returns to vendor, Customer returns restock logic, Landed cost allocation\nAI role: Transfer imbalance detection, Shrinkage anomaly detection, Suggested adjustment cause, Landed-cost allocation assistance'
    },
    {
      path: 'workforce/employee_core',
      title: '6.1 Employee and HR Core',
      description: 'Submodules: Employee master, Contracts, Department assignment, Leave, Attendance/time, Claim/reimbursement links\nAI role: Missing-data alerts, Role inconsistency detection, Onboarding/offboarding checklist guidance'
    },
    {
      path: 'workforce/payroll',
      title: '6.2 Payroll',
      description: 'Submodules: Payroll inputs, Earnings/deductions, Allowances, Overtime, Leave effect, Payroll journal posting, Payslips, Statutory deductions\nAI role: Variance analysis, Overtime anomaly detection, Missing input alerts, Payroll exception summaries'
    },
    {
      path: 'service/operations',
      title: '7.1 Service Operations',
      description: 'Submodules: Work orders, Appointments, Service billing, Consumables usage, Case management\nAI role: Missing billable item detection, Service productivity hints, Cost leakage alerts'
    },
    {
      path: 'service/projects',
      title: '7.2 Projects/Jobs',
      description: 'Submodules: Project budget, Timesheets, Materials, Billing milestones, Job profitability\nAI role: Overrun alerts, Billing lag detection, Margin risk forecasting'
    },
    {
      path: 'sectors/overlays',
      title: '7.3 Sector Overlays',
      description: 'Sectors: Retail, F&B, Pharmacy, Clinic, Service, Hospitality\nAI role: Sector-specific guidance, compliance hints, operational recommendations'
    }
  ],
  phase4: [
    {
      path: 'ai_fabric/exception',
      title: '10.4 Exception AI',
      description: 'Handles anomalies. Detect, classify severity, explain likely cause, route to owner.'
    },
    {
      path: 'ai_fabric/close',
      title: '10.5 Close AI',
      description: 'Supports period-end. Missing reconciliations, unusual journals, pending support, blocked close items.'
    },
    {
      path: 'reporting/financial',
      title: '9.2 Financial Reporting',
      description: 'Submodules: Trial balance, P&L, Balance sheet, Cash flow, AR/AP aging, Tax reports, Budget vs actual, management pack\nAI role: variance commentary, balance movement explanations, anomaly summaries, reporting narrative draft'
    },
    {
      path: 'reporting/audit_compliance',
      title: '9.3 Audit and Compliance Reporting',
      description: 'Submodules: audit trail reports, override logs, control exception logs, change history, tax working papers, filing support, compliance dashboards\nAI role: recurring issue detection, evidence compilation, suspicious behavior summaries, control-failure clustering'
    },
    {
      path: 'commercial/sales_invoicing',
      title: '2.2 Sales Order and Invoicing',
      description: 'Submodules: Quotations, Sales orders, Delivery/fulfillment, Invoicing, Credit notes, Customer pricing, Customer credit control\nAI role: Margin warning, Delivery/invoice mismatch detection, Credit-risk alerts'
    },
    {
      path: 'commercial/crm',
      title: '2.3 CRM and Customer Relationship',
      description: 'Submodules: Leads, Opportunities, Contact history, Customer segmentation, Follow-ups, Complaints/cases\nAI role: Lead prioritization, Churn-risk prediction, Upsell recommendations'
    },
    {
      path: 'procurement/receiving',
      title: '3.2 Receiving and Vendor Billing',
      description: 'Submodules: Goods receipt, Service receipt, GRN, Vendor bill, Debit note, 2-way/3-way matching, Withholding tax handling\nAI role: Duplicate invoice detection, PO/GRN/bill match assistance, Missing support detection'
    },
    {
      path: 'procurement/supplier_mgmt',
      title: '3.3 Supplier Management',
      description: 'Submodules: Supplier profile, SLA/performance, Price history, Risk flags, Bank detail controls, Contract repository\nAI role: Supplier risk scoring, Bank-detail fraud alerts, Performance summary'
    }
  ]
};

Object.keys(phases).forEach(phase => {
  phases[phase].forEach(mod => {
    const fullPath = path.join(__dirname, mod.path);
    fs.mkdirSync(fullPath, { recursive: true });
    
    const readmeContent = `# ${mod.title}\n\n## Overview\n${mod.description}\n\n## Current Status\n- Scaffolded for ${phase.replace('phase', 'Phase ')} implementation.\n`;
    fs.writeFileSync(path.join(fullPath, 'README.md'), readmeContent);
    fs.writeFileSync(path.join(fullPath, 'index.ts'), `// Entry point for ${mod.title}\n\nexport const init = () => {\n  console.log('Initializing ${mod.title}');\n};\n`);
  });
});

console.log('Phases 2-4 project scaffolding completed successfully.');
