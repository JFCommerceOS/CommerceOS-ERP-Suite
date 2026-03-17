# Test Scenarios and Proof Matrix

## Objective
To ensure that "a process is not proven unless it is tested end-to-end from entry to reporting with evidence" covering the ERP Core.

## 1. Traceability Rules

Every test scenario must prove:
1. **The Entry:** Who, what, and when?
2. **The Control:** Did AI or a Manager intercept when required?
3. **The Accounting Truth:** Were the correct ledgers hit? Was inventory costed properly?
4. **The Audit Evidence:** Is the source document (e.g., PDF bill) immutably linked?

---

## 2. Testing Scenarios

### Scenario A: Clean Procure to Pay (P2P)
- **Actor:** User 1 (Operations), User 2 (Warehouse), User 3 (AP)
- **Data:** 10 widgets, $5 each, Supplier: TechCorp
- **Action Sequence:**
  1. User 1 submits PR for $50. Auto-approved.
  2. PO generated and sent.
  3. User 2 receives 10 widgets. **(Test Gate: Verify DR Inventory / CR GRNI, $50)**
  4. User 3 uploads TechCorp vendor bill PDF. OCR extracts it.
  5. 3-way match clears. **(Test Gate: Verify DR GRNI, DR Tax, CR AP)**
  6. Finance pays bill. **(Test Gate: Verify DR AP, CR Bank)**
- **Audit Requirement:** The payment journal must link through the AP bill directly back to the original PR and GRN receipt.

### Scenario B: AI Duplicate Invoice Detection
- **Actor:** User (AP)
- **Data:** TechCorp Bill No. INV-001 ($50)
- **Action Sequence:**
  1. AP enters INV-001 on Monday. Match succeeds.
  2. AP attempts to upload another PDF on Wednesday with the same number or identical line totals for TechCorp on the same date.
  3. **AI Control Fire:** `Entry Guard AI` blocks entry, stating "Duplicate Vendor Document detected".
  4. **Audit Requirement:** The blocked attempt is logged in the `Audit trail reports` (Submodule 9.3).

### Scenario C: POS Sale with Negative Inventory Risk
- **Actor:** Cashier
- **Data:** 1 Widget, Stock status: 0. 
- **Action Sequence:**
  1. Cashier attempts to ring up the widget.
  2. **AI Control Fire:** `Entry Guard AI` predicts negative stock.
  3. Policy configured to `Warn` instead of `Block` for retail agility.
  4. Cashier overrides warning and finalizes sale.
  5. **(Test Gate: Verify DR Sales Return/COGS creates negative balance ledger footprint accurately)**
  6. **(Test Gate: Exception AI routes a high-severity alert to Warehouse Manager immediately for shrink investigation.)**

### Scenario D: Financial Month-End Close Failure
- **Actor:** Controller
- **Data:** January period. One bank account is unreconciled.
- **Action Sequence:**
  1. Controller clicks "Close Period: January".
  2. **AI Control Fire:** `Process Guard AI` checks dependencies. Blocks the lock due to "Bank Account X un-reconciled lines exist".
  3. Controller overrides via Maker-Checker, claiming immateriality.
  4. Finance Director receives escalation notification of the override.
  5. **Audit Requirement:** Submodule 9.3 logs the lock date, the un-reconciled state bypass, and the approving Director.

## 3. Proof Matrix Sign-off (Template)

| Test ID | Process | Ledgers Audited | AI Guard Audited | Documents Attached | Sign-off Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| P2P-001 | Clean PO to Pay | Yes | N/A | Yes | PENDING |
| P2P-002 | Dupe Catch | N/A | Yes | Yes | PENDING |
| O2C-001 | POS Sale Stock Warn | Yes | Yes | Receipt | PENDING |
| FIN-001 | Period Lock Override | N/A | Yes | None | PENDING |
