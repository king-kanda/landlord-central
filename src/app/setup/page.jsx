import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";


const Page = () => {
  return (
    <>
      {/* two grid rows intro and forms */}
      <section className="grid grid-cols-2 gap-4 p-4 bg-muted h-screen">
          <div className="rounded-sm border bg-white flex items-center justify-center p-6">
              <div className="w-[90%] ">
                  <h1 className={` font-bold text-2xl text-black w-2/3`}>
                    We need some information to help you set up your business
                  </h1>
                  <p className={`text-muted-foreground text-sm w-4/5 mt-5`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ducimus, quos nostrum consectetur ad ullam. Nihil repellendus provident et vero quo deserunt eaque laudantium unde est maxime,
                  </p>
              </div>
          </div>
          <div className="rounded-sm border bg-white flex items-center justify-center">
               <div className="setup-container w-[80%]">
                  <div className="biz-nature">
                    <h2 className={`font-bold`}>
                      What&apos;s the nature of your business ?
                    </h2>
                    <RadioGroup className={`flex items-center my-4`} defaultValue="option-one">
                      <div className="group flex items-center space-x-2 border border-muted-foreground rounded-sm px-4 py-2 hover:border-orange">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Agency</Label>
                      </div>

                      <div className="group flex items-center space-x-2 border border-muted-foreground rounded-sm px-4 py-2 hover:border-orange">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Individual Property Owner</Label>
                      </div>
                    </RadioGroup>

                  </div>
                  <div className="biz-name">
                    <h2 className={`font-bold`}>
                     Business/Company Name ?
                    </h2>
                    <Input type="text" placeholder="Nyumba Link" className={ ` mt-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent `} />
                    <p className="text-xs text-muted-foreground mt-1">
                      if you are a individual property owner you can use your property name here , or if you work with an agency kindly use the full agancy name here
                    </p>
                  </div>
                  <div className="biz-nature mt-4">
                    <h2 className={`font-bold`}>
                     How many properties/unit do you manage ?
                    </h2>
                    <RadioGroup className={`flex items-center my-4`} defaultValue="option-one">
                      <div className="group flex items-center space-x-2 border border-muted-foreground rounded-sm px-4 py-2 hover:border-orange">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">1-50</Label>
                      </div>

                      <div className="group flex items-center space-x-2 border border-muted-foreground rounded-sm px-4 py-2 hover:border-orange">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">50-100</Label>
                      </div>
                      <div className="group flex items-center space-x-2 border border-muted-foreground rounded-sm px-4 py-2 hover:border-orange">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">100-1000</Label>
                      </div>
                    </RadioGroup>

                  </div>
                  <div className="btn-group mt-12">
                    <Button className={`bg-orange-500 text-white rounded-sm `}>
                      Create Managment Profile
                    </Button>
                  </div>
               </div>
          </div>
      </section>
    </>
  );
}

export default Page;