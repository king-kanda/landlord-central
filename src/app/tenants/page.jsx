import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa";
import Unit from "@/components/tables/unit";
// import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import AddTenant from "@/components/features/add-tenant";
  

const page = () => {
    return (
        <>
            <section className="nav">
                <div className="flex flex-row items-center justify-between">
                    <div className="title">
                        <h3 className='font-bold text-xl'>
                            Tenants
                        </h3>
                        <p className="text-mute-foreground text-sm">List of Tenants</p>
                    </div>
                    <div className="action btn">
                        <Sheet className={` w-[750px] `}>
                            <SheetTrigger>
                                <Button className="bg-orange text-card inline-flex gap-4 ">
                                    <FaPlus/>
                                    Add new tenant
                                </Button>
                            </SheetTrigger>
                            <SheetContent >
                                <AddTenant/>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </section>
            <section className="mt-5 section unit-tables">
                {/* <ScrollArea className=" w-full h-[70vh] p-2"> */}
                    <Unit/>
                {/* </ScrollArea> */}
            </section >
        </>
    );
}

export default page;