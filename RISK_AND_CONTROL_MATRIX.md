# Risk and Control Matrix

## Framework

Every significant process that impacts accounting truth contains inherent risks. The CommerceOS ERP Suite applies targeted controls, leveraging AI as a primary internal control mechanism (`Process Guard AI`, `Entry Guard AI`, `Close AI`, etc.).

### 1. Master Data Governance
| Process | Identified Risk | Control Type | AI Control Fabric Role | Human Interaction |
| :--- | :--- | :--- | :--- | :--- |
| Vendor Creation | Fraudulent or duplicate vendor created | Preventive | **Entry Guard AI:** Detects duplicate details, flags high-risk setups | Vendor Admin must review and approve flags |
| Chart of Accounts (COA) Update | Incorrect account mapping | Preventive | **Entry Guard AI:** Unsuitable account flags | Controller review required |

### 2. Procure to Pay
| Process | Identified Risk | Control Type | AI Control Fabric Role | Human Interaction |
| :--- | :--- | :--- | :--- | :--- |
| Invoice Entry | Paying a duplicate invoice | Preventive | **Entry Guard AI:** Duplicate pattern check | Halt execution; review required by AP |
| Payment Processing | Paying correct vendor via wrong bank detail | Detective | **Exception AI:** Alerts on suspicious vendor bank changes | Segregation of duties |
| PO Matching | Short delivery matched to full bill | Preventive | **Reconciliation AI:** 3-way match auto-reconciliation | Escalate imbalance to Operations |

### 3. Order to Cash
| Process | Identified Risk | Control Type | AI Control Fabric Role | Human Interaction |
| :--- | :--- | :--- | :--- | :--- |
| POS Sales | Wrong price or heavy discounts | Preventive | **Entry Guard AI:** Margin warning, abnormal discount flags | Store Manager override |
| Credit Control | Over-extending credit to risky customer | Detective | **Exception AI:** Credit-risk signals, payment lag prediction | AR Manager approval |

### 4. Inventory Control
| Process | Identified Risk | Control Type | AI Control Fabric Role | Human Interaction |
| :--- | :--- | :--- | :--- | :--- |
| Stock Valuation | Selling items below cost (loss) | Preventive | **Entry Guard AI:** Negative margin alerts during order / POS | Sales override only if approved |
| Write-offs | Unexplained stock losses (shrinkage) | Detective | **Exception AI:** Shrinkage anomaly clustering | Warehouse Manager signs off |

### 5. Financial Close and Reporting
| Process | Identified Risk | Control Type | AI Control Fabric Role | Human Interaction |
| :--- | :--- | :--- | :--- | :--- |
| Journal Entries | Fat-finger errors, inappropriate account use | Preventive | **Entry Guard AI / Exception AI:** Unusual journal detection | Maker-checker routing |
| Tax Filing | Missed input tax or misclassified sales | Detective | **Reporting AI:** Tax anomaly review queue | Compliance officer review |
| Period Close | Closing with unbalanced or un-reconciled ledgers | Preventive | **Process Guard AI / Close AI:** Block closing if checks fail | Finance Director sign-off |

---
**Note:** This matrix directly feeds into the End-to-End Process Maps, connecting the "Why do we control this?" with "How does the software execute this?".
