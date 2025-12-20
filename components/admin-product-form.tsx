"use client";

import { productDefaultValues } from "@/lib/constants";
import { insertProductSchema, updateProductSchema } from "@/lib/validators";
import { Product } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import slugify from "slugify";
import { Textarea } from "./ui/textarea";
import { createProduct, updateProduct } from "@/lib/actions/product.actions";
import { toast } from "sonner";
import { UploadButton } from "@/lib/uploadthing";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Checkbox } from "./ui/checkbox";

export default function ProductForm({
  type,
  product,
  productId,
}: {
  type: "Create" | "Update";
  product?: Product;
  productId?: string;
}) {
  const router = useRouter();

  const form = useForm<
    z.infer<typeof insertProductSchema> | z.infer<typeof updateProductSchema>
  >({
    resolver: zodResolver(
      type === "Update" ? updateProductSchema : insertProductSchema
    ),
    defaultValues:
      product && type === "Update" ? product : productDefaultValues,
  });

  const onSubmit: SubmitHandler<
    z.infer<typeof insertProductSchema> | z.infer<typeof updateProductSchema>
  > = async (values) => {
    // On Create
    if (type === "Create") {
      const res = await createProduct(values);
      if (!res.success) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        router.push("/admin/products");
      }
    }

    // On Update
    if (type === "Update") {
      if (!productId) {
        router.push("/admin/products");
        return;
      }
      const res = await updateProduct({
        ...values,
        id: productId,
      } as z.infer<typeof updateProductSchema>);
      if (!res.success) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        router.push("/admin/products");
      }
    }
  };

  const images = form.watch("images");
  const isFeatured = form.watch("isFeatured");
  const banner = form.watch("banner");

  return (
    <form
      id="product-form"
      method="POST"
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <FieldGroup>
        <div className="flex flex-col md:flex-row gap-5">
          {/* NAME */}
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel htmlFor="product-name">Name</FieldLabel>
                <Input
                  {...field}
                  id="product-name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter product name"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* SLUG */}
          <Controller
            name="slug"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel htmlFor="product-slug">Slug</FieldLabel>
                <div className="flex gap-2">
                  <Input
                    {...field}
                    id="product-slug"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter slug"
                  />
                  <Button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 whitespace-nowrap"
                    onClick={() => {
                      form.setValue(
                        "slug",
                        slugify(form.getValues("name"), { lower: true })
                      );
                    }}
                  >
                    Generate
                  </Button>
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* CATEGORY */}
          <Controller
            name="category"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel htmlFor="product-category">Category</FieldLabel>
                <Input
                  {...field}
                  id="product-category"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter category"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* BRAND */}
          <Controller
            name="brand"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel htmlFor="product-brand">Brand</FieldLabel>
                <Input
                  {...field}
                  id="product-brand"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter brand"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          {/* PRICE */}
          <Controller
            name="price"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel htmlFor="product-price">Price</FieldLabel>
                <Input
                  {...field}
                  id="product-price"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter product price"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* STOCK */}
          <Controller
            name="stock"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel htmlFor="product-stock">Stock</FieldLabel>
                <Input
                  {...field}
                  id="product-stock"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter stock"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <div className="upload-field flex flex-col md:flex-row gap-5">
          {/* IMAGES */}
          <Controller
            name="images"
            control={form.control}
            render={({ fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel>Images</FieldLabel>
                <Card>
                  <CardContent className="space-y-2 mt-2 min-h-48">
                    <div className="flex-start space-x-2">
                      {images.map((image: string) => (
                        <Image
                          key={image}
                          src={image}
                          alt="product image"
                          className="w-20 h-20 object-cover rounded-sm"
                          width={100}
                          height={100}
                        />
                      ))}
                      <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res: { url: string }[]) => {
                          form.setValue("images", [...images, res[0].url]);
                        }}
                        onUploadError={(error: Error) => {
                          toast.error(`ERROR! ${error.message}`);
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <div className="upload-field">
          {/* IS FEATURED */}
          Featured Products
          <Card>
            <CardContent className="space-y-2 mt-2">
              <Controller
                name="isFeatured"
                control={form.control}
                render={({ field }) => (
                  <Field
                    orientation="horizontal"
                    className="space-x-2 items-center"
                  >
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FieldLabel>Is Featured?</FieldLabel>
                  </Field>
                )}
              />
              {isFeatured && banner && (
                <Image
                  src={banner}
                  alt="banner image"
                  className="w-full object-cover object-center rounded-sm"
                  width={1920}
                  height={680}
                />
              )}
              {isFeatured && !banner && (
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res: { url: string }[]) => {
                    form.setValue("banner", res[0].url);
                  }}
                  onUploadError={(error: Error) => {
                    toast.error(`ERROR! ${error.message}`);
                  }}
                />
              )}
            </CardContent>
          </Card>
        </div>

        {/* DESCRIPTION */}
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="w-full">
              <FieldLabel htmlFor="product-description">Description</FieldLabel>
              <Textarea
                {...field}
                id="product-description"
                aria-invalid={fieldState.invalid}
                placeholder="Enter product description"
                className="resize-none"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      {/* BUTTON */}
      <Button
        type="submit"
        size="lg"
        disabled={form.formState.isSubmitting}
        className="button col-span-2 w-full"
      >
        {form.formState.isSubmitting ? "Submitting..." : `${type} Product`}
      </Button>
    </form>
  );
}
