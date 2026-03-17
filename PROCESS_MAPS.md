# End-to-End Process Maps

These process maps detail the standard flow of operations within the CommerceOS ERP Suite. They connect user interaction, AI controls, and accounting truth.

## 1. Procure to Pay (P2P)

**Flow:** Request -> Order -> Receive -> Invoice -> Pay

1. **Purchase Requisition (PR):**
    *   **User Action:** Employee raises a PR in `Procurement and Supply layer`.
    *   **AI Control:** Suggests preferred supplier, compares quotes.
    *   **Approval Gate:** Department Manager approves via threshold.
2. **Purchase Order (PO):**
    *   **User Action:** Procurement creates PO from PR.
    *   **AI Control:** `Process Guard AI` checks for missing vendor details; creates a "purchasing commitment" flag (no journal yet).
    *   **Approval Gate:** Operations Head approves.
3. **Goods Receipt Note (GRN):**
    *   **User Action:** Warehouse receives goods.
    *   **Journal Impact:** Dr Inventory, Cr Accrued Purchases (GRNI).
    *   **AI Control:** Updates `Exception AI` to watch for delayed vendor bills.
4. **Vendor Bill (AP Invoice):**
    *   **User Action:** AP team records the invoice from vendor.
    *   **AI Control:** `Reconciliation AI` performs a 3-way match (PO = GRN = Bill). `Entry Guard AI` flags duplicates.
    *   **Journal Impact:** Dr Accrued Purchases (GRNI), Dr Input Tax, Cr AP.
5. **Payment Release:**
    *   **User Action:** Finance selects approved bills for a payment run.
    *   **AI Control:** Checks bank routing details and suggests priority payments.
    *   **Approval Gate:** Finance Director releases the file to the bank.
    *   **Journal Impact:** Dr AP, Cr Bank.

## 2. Order to Cash (O2C)

**Flow:** Quote -> Order -> Deliver -> Invoice -> Collect -> Reconcile

1. **Sales Order (SO):**
    *   **User Action:** Sales Representative creates an SO.
    *   **AI Control:** `Entry Guard AI` warns if margin is too low or customer is near credit limit.
    *   **Approval Gate:** Credit Controller override (if flagged).
2. **Delivery (Fulfillment):**
    *   **User Action:** Warehouse processes shipment.
    *   **Journal Impact:** Dr COGS, Cr Inventory.
3. **Sales Invoice:**
    *   **User Action:** Finance/Sales ops generates the invoice based on delivery.
    *   **Journal Impact:** Dr AR, Cr Sales Revenue, Cr Output Tax.
    *   **AI Control:** Drafts suggested follow-up timing for collections (`Reporting AI`).
4. **Receipt / Collection:**
    *   **User Action:** Customer pays.
    *   **AI Control:** Auto-matching receipt to invoice.
    *   **Journal Impact:** Dr Bank, Cr AR.
5. **Bank Reconciliation:**
    *   **User Action:** Finance completes daily/weekly recs.
    *   **AI Control:** `Reconciliation AI` suggests matches for statement lines against system lines.

## 3. Period-End Close

**Flow:** Ensure completeness -> Adjust -> Report

1. **Checklist Review:**
    *   **User Action:** Close Manager opens the month-end checklist.
    *   **AI Control:** `Process Guard AI` warns of missing tasks, unreconciled bank accounts.
2. **Accruals and Adjustments:**
    *   **User Action:** Controller posts month-end manual journals for prepayments, depreciations.
    *   **AI Control:** Draft schedules prepared by `Close AI`. Abnormal manual journals flagged.
    *   **Approval Gate:** Finance Director approves material adjusting entries.
3. **Finalization:**
    *   **User Action:** System runs GL consolidation steps (multi-entity if applicable).
    *   **Journal Impact:** Books closed for the period; retained earnings updated.
    *   **Approval Gate:** CFO/Controller signs off in system (`Audit AI` logs the lock date and block overriding).
