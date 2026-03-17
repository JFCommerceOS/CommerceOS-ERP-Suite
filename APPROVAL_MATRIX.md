# Approval Matrix

This document maps out the specific approval thresholds, routing rules, and the relevant AI control point for core processes within the CommerceOS ERP Suite.

## 1. Governance and Master Data
| Process / Action | Approver / Role | Threshold | AI Assistance | Action Type |
| :--- | :--- | :--- | :--- | :--- |
| Add new company entity | Finance Director | All | Structure validation | Human-controlled |
| Update Chart of Accounts | Controller | All | Mapping suggestion | Human-controlled |
| Open/close fiscal periods | Admin / Controller | All | Period control warnings | Human-controlled |
| Update payment terms | Sales Ops Leader | All | Pattern matching | Human-controlled |

## 2. Procurement to Pay
| Process / Action | Approver / Role | Threshold | AI Assistance | Action Type |
| :--- | :--- | :--- | :--- | :--- |
| Purchase Requisition | Dept Manager | ><br>($500 equiv) | Quotation comparison | Escalated Workflow |
| Purchase Order | Operations Head | ><br>($5k equiv) | Budget risk, Supplier rank | Threshold Approval |
| AP Invoice Match | Auto / AP Clerk | 3-way match | Duplicate invoice warning | Low-risk automation |
| Payment Release | Finance Manager | All | Prioritization, Discount check | Human-controlled |

## 3. Order to Cash
| Process / Action | Approver / Role | Threshold | AI Assistance | Action Type |
| :--- | :--- | :--- | :--- | :--- |
| Sales Discount Override | Store Manager | > 10% | Margin warning | Threshold Approval |
| Sales Credit Note | AR Manager | > $100 | Risk alerts | Human-controlled |
| Write-off Bad Debt | Finance Director | All | Late-payment history | Human-controlled |

## 4. Inventory and Operations
| Process / Action | Approver / Role | Threshold | AI Assistance | Action Type |
| :--- | :--- | :--- | :--- | :--- |
| Stock Adjustment | Warehouse Manager | Abs($100) | Shrinkage anomaly detection | Threshold Approval |
| High Value Write-off | Operations Head | All | Root cause suggestions | Human-controlled |

## 5. Finance and Period Close
| Process / Action | Approver / Role | Threshold | AI Assistance | Action Type |
| :--- | :--- | :--- | :--- | :--- |
| Manual Journal Entry | Controller / Peer | > $0 (Always) | Account suggestion, anomaly | Maker-Checker |
| Tax Filing Workpapers | Compliance Officer | All | Tax anomaly queue | Human-controlled |
| Period-End Close Sign-off | Finance Director | All | Unreconciled account list | Human-controlled |

---
**Note:** The system will dynamically map these general roles (Manager, Director, Controller) to specific users via the `0.1 Core platform services` -> `Role-based permissions` module during implementation.
