Client:
-AddExpenses:Date, Project, Category, Descriptions(optional), Receipt Attachment, Amount, Save Button, Cancel button

-AddTime: Choose Project, Choose Task, Description, and Add Time
-AddClient: Client Name, Description, Contact, Email, Preferred Currency, Add Contact Person under Client

-AddProject: Choose Client(or Add new), Project Name, Project Code, Dates start to end, Description, add/choose Tasks (AddBudgetOptions), choose Team (AddBudgetOptions, and managerChecklistOption) 
--Report permission authorization:only to admin & managers or also to everyon on the project 
--Project Type: Budget(Total hours/Total fees, or fees/hours per each tasks or person), Send alerts when project exceeds % of budget
---Time & Material: Billable rates & Budget
---Fixed Fee: Project Fee & Budget
---Non-Billable: Budget

-AddTask: Task can be added directly to the DB or create new ask when new project is created, and task will be saved to DB

-AddMember(Invite Person): FirstName, LastName, WorkEmail, Type: Employee/contractor/freelancer, Role(optional), Capacity(max hours per week), Default Billable Rate(dollar/hour), Cost rate(dollar/hour), AddthroughCSV(optional)

-AddInvoice: Choose/Add Client, Invoice for tracked time & expenses/free form
-- https://skitrawtech.harvestapp.com/invoices?page=1&per_page=50&tab=open

Server: