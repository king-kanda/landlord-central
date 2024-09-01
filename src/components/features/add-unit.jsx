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
  

const AddUnit = () => {
    return (
        <>
        <SheetHeader>
            <SheetTitle>Create a new unit</SheetTitle>
        </SheetHeader>
        <div className="form-unit mt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Unit Name</Label>
                <Input type="text" id="email" placeholder="Unit Name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Select unit type</Label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue className="text-muted-foreground" placeholder="Unit Type" />
                    </SelectTrigger>
                    <SelectContent>
                        {/* get this from  property types */}
                        <SelectItem value="light">Bedsitter</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Monthly Rent</Label>
                <Input type="number" id="rent" placeholder="Monthly Rent" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Number of Bathrooms</Label>
                <Input type="number" id="rent" placeholder="Bathrooms" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Number of Bedrooms</Label>
                <Input type="number" id="rent" placeholder="Monthly Rent" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label htmlFor="email">Size (Square Footage)</Label>
                <Input type="number" id="rent" placeholder="Monthly Rent" />
            </div>
        </div>
       

    
        <SheetFooter className={`mt-4`}>
          <SheetClose asChild>
            <Button className="bg-orange hover:bg-navy-blue" type="submit">Add Unit</Button>
          </SheetClose>
        </SheetFooter>
        </>
    );
}

export default AddUnit;