// import { Revenue } from '@/components/charts/revenue';
import Invoices from '@/components/tables/dashboard/invoices';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaExpandAlt } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area"


const Page = () => {

  return (
    <>
    <ScrollArea className="h-[85vh] w-full">
        <section className="welcome-section">
            <h1 className="text-2xl font-bold ">
              Welcome, Mebo
            </h1>
            <p className="text-sm text-muted-foreground">
              This is your property summary so far
            </p>
        </section>
        <section className="card-data grid grid-cols-4 gap-4 mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue Collected</CardTitle>
              <FaExpandAlt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tentants</CardTitle>
              <FaExpandAlt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Leases</CardTitle>
              <FaExpandAlt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">31</div>
              <p className="text-xs text-muted-foreground">+2.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Due Invoices</CardTitle>
              <FaExpandAlt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">17</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
        </section>
        <div className="flex flex-1 gap-4 mt-4">
            {/* <Revenue/> */}
            <Invoices/>
        </div>
    </ScrollArea>
    </>
  );
}

export default Page;
