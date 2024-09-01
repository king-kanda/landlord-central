import {
    SheetClose,
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
import DatePicker from "./date"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { IoAlertCircleOutline } from "react-icons/io5";
  

const AddLease = () => {
    return (
        <>
        <SheetHeader>
            <SheetTitle>Create a new Lease</SheetTitle>
        </SheetHeader>
        <Alert variant="info" className="mt-2">
            <IoAlertCircleOutline className="h-5 w-5 text-navy-blue" />
            <AlertDescription>
                You&apos;ll be able to add more details& documents once your lease is created, print and send the lease
            </AlertDescription>
        </Alert>
        <div className="form-unit mt-4">

            <div className="grid grid-cols-2 gap-4 my-2">
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Select Unit</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4 my-2">
                    <Label htmlFor="email">Select Tenant</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 my-2">
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Select Lease Type</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Start Date</Label>
                    <DatePicker/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 my-2">
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Rent Due </Label>
                    <Input type="text" id="tenant-name" placeholder="Enter Tenants name" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Notice Period(Days)</Label>
                    <Input type="email" id="tenant-email" placeholder="Tenant Email address" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 my-2">
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Grace Period(Days)</Label>
                    <Input type="text" id="tenant-name" placeholder="Enter Tenants name" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Rent(KES)</Label>
                    <Input type="email" id="tenant-email" placeholder="Tenant Email address" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 my-2">
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Security Deposit (KES)</Label>
                    <Input type="text" id="tenant-name" placeholder="Enter Tenants name" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Security Deposit Due Date</Label>
                    <DatePicker/>
                </div>
            </div>
            
           
        </div>
       

    
        <SheetFooter className={`mt-4`}>
          <SheetClose asChild>
            <Button className="bg-orange hover:bg-navy-blue" type="submit">Create New Lease</Button>
          </SheetClose>
        </SheetFooter>
        </>
    );
}

export default AddLease;