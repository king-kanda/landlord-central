import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ConfirmationForm() {
  return (
        <>
            <div className="flex items-center justify-center h-screen">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            Email Confirmation
                        </CardTitle>
                        <CardDescription>
                            We&apos;ve sent you an email with a confirmation code .Enter the confirmation code sent to your email.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="confirmation-code">
                                Confirmation Code
                            </Label>
                            <Input
                                id="confirmation-code"
                                type="text"
                                placeholder="Enter code"
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-orange">
                            Confirm
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
  );
}
