"use client";
import { useRouter } from "next/navigation";
import { signInUserSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { signInDefaultValues } from "@/constants";

import { toast } from "sonner";
import { signInUser } from "@/actions/user.action";

export default function SignIn() {
  const router = useRouter();
  const form = useForm<z.infer<typeof signInUserSchema>>({
    resolver: zodResolver(signInUserSchema),
    defaultValues: signInDefaultValues,
  });

  async function onSubmit(data: z.infer<typeof signInUserSchema>) {
    const res = await signInUser(data);
    if (!res.success) {
      toast.error(res.message);
    } else {
      toast.success("User signed in successfully");
      router.push("/");
    }
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>For returning customers</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="sign-in-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-input-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-input-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-input-password">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-input-password"
                    aria-invalid={fieldState.invalid}
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" form="sign-in-form">
            Log In
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
