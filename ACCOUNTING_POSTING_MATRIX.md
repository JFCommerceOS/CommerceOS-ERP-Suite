# Accounting Posting Matrix

This matrix defines for each transaction type the journal impact, tax impact, approval gate, AI checks, and risk level. It is the core bridge between system design and implementation, following our "Accounting First" design principle.

## Phase 1: Core ERP Base

### 1. Master Data
| Transaction Type | Journal Impact | Tax Impact | Approval Gate | AI Checks | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Create Customer | None | Indirect (sets tax rules) | None (assisted) | Duplicate detection, Missing fields, Classifications | Low |
| Create Vendor | None | Indirect | Master Data Admin | Supplier risk score, Bank detail fraud alert | High |
| Create Item | None | Indirect | Master Data Admin | Duplicate SKU, Incomplete tax settings | Medium |

### 2. POS / Sales
| Transaction Type | Journal Impact | Tax Impact | Approval Gate | AI Checks | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| POS Cash Sale | Dr Cash/Bank<br>Cr Sales Revenue<br>Cr Output Tax<br>Dr COGS<br>Cr Inventory | Output VAT/GST recognized | Auto (unless flagged) | Wrong-price warning, Item suggestions | Low |
| POS Refund | Dr Sales Return<br>Dr Output Tax<br>Cr Cash/Bank<br>Dr Inventory<br>Cr COGS | Output VAT/GST reversed | Store Manager (if > threshold) | Suspicious void/refund detection | Medium |
| Sales Order | None (Mem. entry only) | None | Credit Control (if account) | Margin warning, Credit risk signal | Low-Medium |
| Sales Invoice (On Account) | Dr AR<br>Cr Sales Revenue<br>Cr Output Tax<br>Dr COGS<br>Cr Inventory | Output VAT/GST recognized | Auto (Credit Hold exceptions) | Delivery/invoice mismatch, Duplicate | Medium |

### 3. Purchasing & Payables
| Transaction Type | Journal Impact | Tax Impact | Approval Gate | AI Checks | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Purchase Order | None (Commitment) | None | Budget Holder | Price anomaly, Budget risk alert | Medium |
| Goods Receipt (GRN) | Dr Inventory / Expense<br>Cr GRNI / Accrual | None | Warehouse Auto / Receiver | PO/GRN match assistance | Medium |
| Vendor Bill (Invoice) | Dr GRNI / Accrual<br>Dr Input Tax<br>Cr AP | Input VAT/GST recognized | AP Auto (with 3-way match) | Duplicate invoice, Tax-code suggestion | High |
| AP Payment | Dr AP<br>Cr Cash/Bank | None (Unless cash-basis) | Finance / Payment Approver | Payment prioritization, Bank mismatch | High |

### 4. Inventory
| Transaction Type | Journal Impact | Tax Impact | Approval Gate | AI Checks | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Stock Transfer | None | None | Auto | Transfer imbalance detection | Low |
| Stock Adjustment / Write-off | Dr Expense / COGS<br>Cr Inventory | Possible VAT adjustment | Warehouse Manager / Finance | Shrinkage anomaly, Cause suggestion | High |

### 5. GL / Finance
| Transaction Type | Journal Impact | Tax Impact | Approval Gate | AI Checks | Risk Level |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Manual Journal Entry | Custom | Custom (Review) | Finance Controller | Account suggestion, Unusual journal | High |
| Bank Reconciliation | None | None | Finance Review | Reconciliation suggestions, Fees | Medium |

---
**Note:** This matrix serves as the foundation for the upcoming code data models and approval workflow definitions. The next required artifacts are the Approval Matrix and Risk and Control Matrix.
