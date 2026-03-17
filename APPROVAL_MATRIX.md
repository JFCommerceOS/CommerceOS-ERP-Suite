# Approval Matrix v1

Use this as the control skeleton for Antigravity to build around.
Thresholds are placeholders for design and should be made configurable by:

* company
* branch
* module
* risk level
* amount
* item/category
* vendor/customer risk
* exception type

## 1. Approval levels

| Level | Role type                         | Typical use                                         |
| ----- | --------------------------------- | --------------------------------------------------- |
| L0    | Auto / system rule                | Low-risk bounded actions only                       |
| L1    | Frontline supervisor              | Daily operational exceptions                        |
| L2    | Department manager                | Standard commercial/stock/AP exceptions             |
| L3    | Finance manager / Ops manager     | Financially material or policy-sensitive items      |
| L4    | Controller / Head of Finance / GM | High-risk, tax-sensitive, or period-sensitive items |
| L5    | CFO / Owner / Director            | Critical, unusual, fraud-risk, or group-level items |

## 2. Sales and POS approval matrix

| Transaction / event              | Default approver | Escalation trigger                            | Escalate to | AI checks                                           |
| -------------------------------- | ---------------- | --------------------------------------------- | ----------- | --------------------------------------------------- |
| Normal POS sale                  | L0               | none                                          | -           | price, tax, stock, duplicate receipt                |
| Discount above cashier limit     | L1               | exceeds branch promo rule                     | L2          | margin risk, promo misuse, user pattern             |
| Manual price override            | L1               | high variance from standard price             | L2          | unusual price drop, item risk                       |
| Refund / void                    | L1               | high amount, repeated same user, after-hours  | L2/L3       | fraud pattern, duplicate refund, stock return logic |
| Credit sale to existing customer | L1               | credit limit breach or overdue AR             | L2/L3       | credit risk, aging, exposure                        |
| Credit note                      | L2               | high amount or repeated on same customer/item | L3          | return abuse, revenue reversal risk                 |

## 3. Procurement and AP approval matrix

| Transaction / event       | Default approver | Escalation trigger                            | Escalate to | AI checks                                       |
| ------------------------- | ---------------- | --------------------------------------------- | ----------- | ----------------------------------------------- |
| Purchase requisition      | L1               | above department budget                       | L2/L3       | budget breach, urgency pattern                  |
| RFQ / supplier selection  | L2               | non-lowest quote chosen without reason        | L3          | quote comparison, vendor risk                   |
| Purchase order            | L2               | high amount / non-contracted vendor           | L3          | budget, vendor history, price anomaly           |
| Goods receipt variance    | L1               | qty/price mismatch above tolerance            | L2          | over-receipt, repeated supplier issue           |
| Vendor bill posting       | L2               | no PO/GRN, tax exception, duplicate risk      | L3/L4       | duplicate invoice, 2/3-way match, tax treatment |
| Vendor master bank change | L3               | any payment-enabled bank update               | L4          | fraud indicators, similarity checks             |
| Payment batch release     | L3               | high value / changed bank / urgent manual pay | L4/L5       | duplicate pay, blocked vendor, bank risk        |

## 4. Inventory and warehouse approval matrix

| Transaction / event     | Default approver | Escalation trigger                          | Escalate to | AI checks                                |
| ----------------------- | ---------------- | ------------------------------------------- | ----------- | ---------------------------------------- |
| Standard stock transfer | L1               | unusual qty or repeated imbalance           | L2          | stock imbalance, demand mismatch         |
| Stock adjustment        | L2               | above tolerance / negative-stock correction | L3          | shrinkage pattern, cause code logic      |
| Write-off / wastage     | L2               | high value / repeated item/location/user    | L3/L4       | anomaly, expiry pattern, fraud risk      |
| Return to vendor        | L1               | large value or no linked purchase           | L2/L3       | purchase linkage, stock valuation impact |
| Landed cost allocation  | L2               | material value / manual override            | L3          | allocation logic, unusual freight ratio  |

## 5. Finance and accounting approval matrix

| Transaction / event                | Default approver | Escalation trigger                             | Escalate to | AI checks                                                |
| ---------------------------------- | ---------------- | ---------------------------------------------- | ----------- | -------------------------------------------------------- |
| Routine journal entry              | L2               | manual non-routine or unusual account combo    | L3          | unusual journal detection, period check                  |
| Recurring journal maintenance      | L3               | any rule change                                | L4          | mapping drift, duplicate recurrence                      |
| Manual reclassification            | L3               | material amount / tax effect / prior period    | L4          | policy mismatch, disclosure impact                       |
| Accrual / deferral posting         | L2               | material amount or manual schedule override    | L3          | cut-off, reversal setup, duplicate accrual               |
| Bank reconciliation final sign-off | L2               | unreconciled material items remain             | L3/L4       | stale recon items, suspicious statement lines            |
| AR write-off                       | L3               | above threshold / related-party / dispute case | L4          | aging, collection history, recovery likelihood           |
| AP write-off / balance cleanup     | L3               | above threshold / tax impact                   | L4          | duplicate handling, stale liability review               |
| Period reopen                      | L4               | any reopen after close                         | L5          | close integrity, downstream impact                       |
| Period close sign-off              | L4               | unresolved critical exceptions                 | L5          | unreconciled accounts, unusual journals, missing support |

## 6. Tax approval matrix

| Transaction / event              | Default approver | Escalation trigger                       | Escalate to | AI checks                                 |
| -------------------------------- | ---------------- | ---------------------------------------- | ----------- | ----------------------------------------- |
| Tax code override on transaction | L2               | override of default tax mapping          | L3/L4       | tax inconsistency, policy rule match      |
| Withholding tax override         | L3               | manual deviation from vendor default     | L4          | vendor tax profile, prior pattern         |
| Tax adjustment journal           | L3               | material value / prior-period adjustment | L4/L5       | filing impact, documentation completeness |
| Draft tax filing submission pack | L3               | unresolved missing evidence              | L4          | document gaps, mismatch to ledger         |
| Final tax filing sign-off        | L4               | any high-risk exception                  | L5          | anomaly summary, filing completeness      |

## 7. Fixed assets approval matrix

| Transaction / event             | Default approver | Escalation trigger                           | Escalate to | AI checks                                |
| ------------------------------- | ---------------- | -------------------------------------------- | ----------- | ---------------------------------------- |
| Expense vs capex classification | L2               | material amount or borderline classification | L3/L4       | capex indicators, useful-life logic      |
| Asset capitalization            | L2               | manual class override / incomplete metadata  | L3          | asset class, depreciation setup          |
| Asset disposal                  | L3               | material NBV / unusual loss                  | L4          | disposal anomaly, missing approval chain |
| Impairment / revaluation        | L4               | always                                       | L5          | indicator evidence, prior history        |

## 8. Payroll and HR approval matrix

| Transaction / event    | Default approver | Escalation trigger                     | Escalate to | AI checks                                   |
| ---------------------- | ---------------- | -------------------------------------- | ----------- | ------------------------------------------- |
| Employee master update | L1               | bank/payroll/tax fields changed        | L2/L3       | duplicate identity, fraud flags             |
| Overtime approval      | L1               | high hours / repeated abnormal pattern | L2          | anomaly vs schedule/history                 |
| Payroll run review     | L2               | material variance from prior cycle     | L3          | missing input, duplicate employee, variance |
| Payroll release        | L3               | any unresolved anomaly                 | L4          | final variance and compliance checks        |
| Bonus / special payout | L2               | above threshold or off-cycle           | L3/L4       | policy, budget, unusual beneficiary pattern |

## 9. Multi-company and consolidation approval matrix

| Transaction / event          | Default approver | Escalation trigger                        | Escalate to | AI checks                              |
| ---------------------------- | ---------------- | ----------------------------------------- | ----------- | -------------------------------------- |
| Intercompany charge creation | L3               | tax/currency/manual pricing issue         | L4          | mirror-entry match, FX, TP flag        |
| Intercompany settlement      | L3               | old balance / mismatch                    | L4          | aging, duplicate settlement            |
| Elimination entry            | L4               | manual elimination or unsupported balance | L5          | imbalance source, mapping              |
| Consolidation sign-off       | L4               | unresolved entity exceptions              | L5          | missing submissions, unusual movements |

## 10. Document and workflow approval matrix

| Transaction / event       | Default approver | Escalation trigger                      | Escalate to | AI checks                              |
| ------------------------- | ---------------- | --------------------------------------- | ----------- | -------------------------------------- |
| Missing support document  | L1               | aging beyond SLA / material transaction | L2/L3       | missing evidence severity              |
| Approval chain override   | L3               | any manual bypass                       | L4/L5       | SoD breach, user anomaly               |
| Delegated approval use    | L2               | outside planned delegation window       | L3          | timing/user anomaly                    |
| Workflow stuck beyond SLA | L1               | repeated delay / close-critical item    | L2/L3       | bottleneck detection, priority scoring |

## 11. AI action policy by approval level

| AI action                         | Allowed at L0                                   | Needs human approval       |
| --------------------------------- | ----------------------------------------------- | -------------------------- |
| OCR extraction                    | Yes                                             | No                         |
| Duplicate detection               | Yes                                             | No                         |
| Suggest account/tax/item          | Yes                                             | No                         |
| Draft bill/journal/recon          | Yes                                             | Yes                        |
| Auto-post low-risk recurring item | Only if rule-bound and approved template exists | Reviewable                 |
| Block suspicious transaction      | Yes                                             | Override requires approval |
| Escalate anomaly                  | Yes                                             | No                         |
| Final payment / filing / close    | No                                              | Yes                        |

## 12. Segregation-of-duties rules to lock

These should be hard control rules:

* Vendor creator cannot approve vendor payment release
* Bank-detail changer cannot approve payment batch
* Cashier cannot approve own refund exceptions above limit
* AP processor cannot approve own manual vendor bill exception
* Payroll preparer cannot release final payroll
* Journal preparer cannot approve own material manual journal
* Tax preparer cannot be sole final tax filer approver
* Period closer cannot reopen closed period without higher approval

## 13. Exception severity model

| Severity | Typical response                                    |
| -------- | --------------------------------------------------- |
| Low      | Warn only                                           |
| Medium   | Warn + log                                          |
| High     | Block or escalate                                   |
| Critical | Block + high-control approval + audit log highlight |

## 14. What Antigravity should implement next after this

Build approval engine with these fields:

* module
* transaction type
* branch/entity
* amount threshold
* risk score
* exception type
* user role
* maker-checker restriction
* escalation SLA
* AI severity/confidence
* required documents
* final approval role
