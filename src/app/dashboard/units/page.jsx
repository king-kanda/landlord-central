import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa";
import Unit from "@/components/tables/unit";
// import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import AddUnit from "@/components/features/add-unit";
  

const page = () => {
    return (
        <>
            <section className="nav">
                <div className="flex flex-row items-center justify-between">
                    <div className="title">
                        <h3 className='font-bold text-xl'>
                            Units
                        </h3>
                        <p className="text-mute-foreground text-sm">Units belonging to property name</p>
                    </div>
                    <div className="action btn">
                        <Sheet>
                            <SheetTrigger>
                                <Button className="bg-orange text-card inline-flex gap-4 ">
                                    <FaPlus/>
                                    Add Unit
                                </Button>
                            </SheetTrigger>
                            <SheetContent className={` w-[850px] `}>
                                <AddUnit/>
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