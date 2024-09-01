import {
    SheetClose,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const AddTenant = () => {
    return (
        <>
        <SheetHeader>
            <SheetTitle>Create a new unit</SheetTitle>
        </SheetHeader>
        <div className="form-unit mt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Full Name</Label>
                <Input type="text" id="tenant-name" placeholder="Enter Tenants name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="tenant-email" placeholder="Tenant Email address" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Phone Number </Label>
                <Input type="phone" id="tenant-phone" placeholder="Phone Number" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
                <h3 className="font-bold text-xl ">
                    Next of Kin Details
                </h3>
            </div>
            
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Full Name</Label>
                <Input type="text" id="tenant-name" placeholder="Enter kin's name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="tenant-email" placeholder="Kin's Email address" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Phone Number </Label>
                <Input type="phone" id="tenant-phone" placeholder="Phone Number" />
            </div>
        </div>
       

    
        <SheetFooter className={`mt-4`}>
          <SheetClose asChild>
            <Button className="bg-orange hover:bg-navy-blue" type="submit">Add Tenant</Button>
          </SheetClose>
        </SheetFooter>
        </>
    );
}

export default AddTenant;