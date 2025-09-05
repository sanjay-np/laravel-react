import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, typeSignInSchema } from "@/data/validator";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "@/components/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

const Index = () => {

    const form = useForm<typeSignInSchema>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const isSubmitting = form.formState.isSubmitting

    const onSubmit = () => { }

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
                                                    <FormLabel>Email address</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="user@example.com"
                                                            className={cn(
                                                                "rounded-sm focus-visible:ring-0 shadow-none",
                                                                {
                                                                    "border-red-500 ring-red-500": form.formState.errors.email,
                                                                }
                                                            )}
                                                            {...field}
                                                        />
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
                                                        <Input
                                                            type="password"
                                                            placeholder="••••••••"
                                                            className={cn(
                                                                "rounded-sm focus-visible:ring-0 shadow-none",
                                                                {
                                                                    "border-red-500 ring-red-500": form.formState.errors.password,
                                                                }
                                                            )}
                                                            {...field}
                                                        />
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
