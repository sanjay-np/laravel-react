import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import Link from "@/components/app/link";
import { Icon } from "@/components/ui/icon";

import { signInSchema } from "@/data/validator";
import { typeLoginRequestData, typeLoginResponseData } from "@/data/types/generated";
import { cn } from "@/lib/utils";

const Index = () => {

    const form = useForm<typeLoginRequestData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const isSubmitting = form.formState.isSubmitting

    const onSubmit = async () => {
        try {
            const requestData: typeLoginRequestData = form.getValues();
            const response = await axios.post<typeLoginResponseData>('/api/login', requestData)
            const res = response.data;
            console.log(res)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Axios error:", error.response?.data);
            } else {
                console.error("Unexpected error:", error);
            }
        }
    }

    return (
        <div className="flex min-h-screen w-full items-stretch bg-white">
            <div className="flex flex-row flex-wrap w-full min-h-screen">
                <div className="w-3/5 bg-teal-600">
                </div>
                <div className="w-2/5 min-h-screen border-r flex items-center justify-center">
                    <div className="max-w-lg w-full px-8 py-12 rounded-lg border shadow-lg">
                        <div className="bg-white flex flex-col space-y-6">
                            <div className="flex flex-col space-y-2">
                                <h2 className="text-3xl font-semibold tracking-tight">Welcome back! </h2>
                                <p className="text-muted-foreground">Start managing your finance faster and better.</p>
                            </div>
                            <div className="space-y-4">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className="flex">
                                                        <FormLabel>Email address</FormLabel>
                                                    </div>
                                                    <FormControl>
                                                        <InputGroup>
                                                            <InputGroupInput
                                                                placeholder="username@email.com..."
                                                                className={cn(
                                                                    "rounded-xs focus-visible:ring-0 shadow-none",
                                                                    {
                                                                        "border-red-500 ring-red-500": form.formState.errors.email,
                                                                    }
                                                                )}
                                                                {...field}
                                                            />
                                                            <InputGroupAddon>
                                                                <Icon name="UserRoundIcon" />
                                                            </InputGroupAddon>
                                                        </InputGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <div className="flex items-center">
                                                        <FormLabel>Password</FormLabel>
                                                        <Link to="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline" >
                                                            Forgot your password?
                                                        </Link>
                                                    </div>
                                                    <FormControl>
                                                        <InputGroup>
                                                            <InputGroupInput
                                                                type="password"
                                                                placeholder="********"
                                                                className={cn(
                                                                    "rounded-xs focus-visible:ring-0 shadow-none",
                                                                    {
                                                                        "border-red-500 ring-red-500": form.formState.errors.email,
                                                                    }
                                                                )}
                                                                {...field}
                                                            />
                                                            <InputGroupAddon>
                                                                <Icon name="LockIcon" />
                                                            </InputGroupAddon>
                                                        </InputGroup>

                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button
                                            type="submit"
                                            className="w-full rounded-sm"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting && <Icon name="Loader2Icon" className="mr-2 animate-spin" />}
                                            {isSubmitting ? "Signing in..." : "Sign in"}
                                        </Button>

                                        <div className="mt-4 text-center text-sm">
                                            Don&apos;t have an account?{" "}
                                            <Link to={"#"} className="underline-offset-4"> Sign up </Link>
                                        </div>
                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
