const {Page}=require("@playwright/test");

class ApplyLeave
{
    constructor(Page)
    {
this.Page=Page;
this.Leavetracker_text=Page.locator('//span[text()="Leave tracker"]');
this.Leavedetails_text=Page.locator('//span[text()="Leave Details"]');
this.ApplyLeave_text=Page.locator('//button[text()=" Apply Leave "]');
this.Select_leave_type=Page.locator('//select[@name="leaveTypeId"]');
this.fromdate=Page.locator('//input[@id="fromDate"]');
this.Todate=Page.locator('//input[@id="toDate"]');
this.LeaveReason=Page.locator('//textarea[@id="Leave_Reason"]');
this.Applybutton=Page.locator('//span[text()="Apply"]');
this.Cancelbutton=Page.locator('(//button[text()=" Cancel "])[1]');

    }

async Click_LeaveTracker()
    {
        await this.Leavetracker_text.click();
    }



    async Click_leavedetails()
    {
        await this.Leavedetails_text.waitFor({state:'visible'})
        await this.Leavetracker_text.click();
    }

    

    async Click_ApplyLeave()
    {
await this.ApplyLeave_text.click();
    }

    async SelelectLeaveType()
    {
        await this.Select_leave_type.selectOption('Sick');
    }

    async SelectFromDate()
    {
        await this.fromdate.click();
        this.page.locator(
      `//td[not(contains(@class,'disabled'))]//span[text()="${date}"]`
    ).click();

    }

    async SelectToDate()
    {
        await this.Todate.click();
         this.page.locator(
      `//td[not(contains(@class,'disabled'))]//span[text()="${date}"]`
    ).click();
    }

    async Leave_Reason(Reason)
    {
        await this.LeaveReason(Reason)
    }

    



}
module.exports={ApplyLeave}