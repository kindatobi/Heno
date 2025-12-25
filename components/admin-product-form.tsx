"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm, FormProvider, useWatch } from "react-hook-form";
import { z } from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import slugify from "slugify";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { UploadButton } from "@/lib/uploadthing";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Checkbox } from "./ui/checkbox";
import { createProductSchema } from "@/lib/validators";
import { productDefaultValues } from "@/constants";
import { X, Plus, Trash2 } from "lucide-react";
import { ProductItem } from "@/types";
import { createProduct, updateProduct } from "@/actions/product.actions";
import { Spin360Upload } from "./admin-spin360upload";

export default function ProductForm({
  type,
  product,
  productId,
}: {
  type: "Create" | "Update";
  product?: ProductItem;
  productId?: string;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof createProductSchema>>({
    resolver: zodResolver(createProductSchema),
    defaultValues:
      product && type === "Update" ? product : productDefaultValues,
  });

  async function onSubmit(data: z.infer<typeof createProductSchema>) {
    if (type === "Create") {
      const res = await createProduct(data);
      if (!res.success) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        router.push("/admin/products");
      }
    }

    if (type === "Update") {
      if (!productId) {
        router.push("/admin/products");
        return;
      }
      const res = await updateProduct({
        values,
        id: productId,
      });
      if (!res.success) {
        toast.error(res.message);
      } else {
        toast.success(res.message);
        router.push("/admin/products");
      }
    }
  }

  const regularImages =
    useWatch({ control: form.control, name: "showcaseImages.regular" }) || [];
  const isFeatured = useWatch({ control: form.control, name: "isFeatured" });
  const banner = useWatch({ control: form.control, name: "banner" });
  const onSale = useWatch({ control: form.control, name: "onSale" });
  const shopImage = useWatch({ control: form.control, name: "shopImage" });
  const sizingInfo =
    useWatch({ control: form.control, name: "sizingInfo" }) || [];
  const sizeStock =
    useWatch({ control: form.control, name: "sizeStock" }) || [];

  const removeRegularImage = (index: number) => {
    const updated = regularImages.filter((_, idx) => idx !== index);
    form.setValue("showcaseImages.regular", updated, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const addSizingInfo = () => {
    form.setValue("sizingInfo", [
      ...sizingInfo,
      { size: "", bodyLength: "", chest: "" },
    ]);
  };

  const removeSizingInfo = (index: number) => {
    const updated = sizingInfo.filter((_, idx) => idx !== index);
    form.setValue("sizingInfo", updated);
  };

  const addSizeStock = () => {
    form.setValue("sizeStock", [...sizeStock, { size: "", stock: 0 }]);
  };

  const removeSizeStock = (index: number) => {
    const updated = sizeStock.filter((_, idx) => idx !== index);
    form.setValue("sizeStock", updated);
  };

  return (
    <FormProvider {...form}>
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

            {/* COLOR */}
            <Controller
              name="color"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="w-full">
                  <FieldLabel htmlFor="product-color">Color</FieldLabel>
                  <Input
                    {...field}
                    id="product-color"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter color"
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
                    type="number"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter product price"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* ON SALE CHECKBOX */}
            <Controller
              name="onSale"
              control={form.control}
              render={({ field }) => (
                <Field
                  orientation="horizontal"
                  className="w-full space-x-2 items-center"
                >
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FieldLabel>On Sale?</FieldLabel>
                </Field>
              )}
            />

            {/* DISCOUNT PERCENT */}
            {onSale && (
              <Controller
                name="discountPercent"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="w-full">
                    <FieldLabel htmlFor="discount-percent">
                      Discount %
                    </FieldLabel>
                    <Input
                      {...field}
                      id="discount-percent"
                      type="number"
                      value={field.value ?? ""}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter discount percentage"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            )}
          </div>

          {/* SHOP IMAGE */}
          <div className="upload-field">
            <Card>
              <CardContent className="space-y-4 mt-2">
                <FieldLabel>Shop Image (Main Thumbnail)</FieldLabel>
                {shopImage ? (
                  <div className="relative w-48 h-48">
                    <Image
                      src={shopImage}
                      alt="Shop thumbnail"
                      className="w-full h-full object-cover rounded"
                      width={200}
                      height={200}
                    />
                    <button
                      type="button"
                      onClick={() => form.setValue("shopImage", "")}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res: { url: string }[]) => {
                      form.setValue("shopImage", res[0].url);
                    }}
                    onUploadError={(error: Error) => {
                      toast.error(`ERROR! ${error.message}`);
                    }}
                  />
                )}
              </CardContent>
            </Card>
          </div>

          {/* 360 SPIN UPLOAD */}
          <Spin360Upload />

          {/* REGULAR PRODUCT IMAGES */}
          <div className="upload-field">
            <Card>
              <CardContent className="space-y-4 mt-2 min-h-48">
                <div className="flex items-center justify-between">
                  <FieldLabel>Regular Product Images</FieldLabel>
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res: { url: string }[]) => {
                      const urls = res.map((file) => file.url);
                      form.setValue(
                        "showcaseImages.regular",
                        [...regularImages, ...urls],
                        {
                          shouldValidate: true,
                          shouldDirty: true,
                        }
                      );
                    }}
                    onUploadError={(error: Error) => {
                      toast.error(`ERROR! ${error.message}`);
                    }}
                  />
                </div>

                {regularImages.length > 0 && (
                  <div className="grid grid-cols-4 gap-4">
                    {regularImages.map((image: string, idx: number) => (
                      <div key={image} className="relative aspect-square group">
                        <Image
                          src={image}
                          alt={`Product ${idx}`}
                          className="w-full h-full object-cover rounded"
                          width={200}
                          height={200}
                        />
                        <button
                          type="button"
                          onClick={() => removeRegularImage(idx)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {regularImages.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No regular images uploaded yet
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* IS FEATURED */}
          <div className="upload-field">
            <Card>
              <CardContent className="space-y-2 mt-2">
                <FieldLabel>Featured Product</FieldLabel>
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
                  <div className="relative">
                    <Image
                      src={banner}
                      alt="banner image"
                      className="w-full object-cover object-center rounded-sm"
                      width={1920}
                      height={680}
                    />
                    <button
                      type="button"
                      onClick={() => form.setValue("banner", "")}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    >
                      <X size={20} />
                    </button>
                  </div>
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
                <FieldLabel htmlFor="product-description">
                  Description
                </FieldLabel>
                <Textarea
                  {...field}
                  id="product-description"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter product description"
                  className="resize-none"
                  rows={3}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* DETAIL */}
          <Controller
            name="detail"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="w-full">
                <FieldLabel htmlFor="product-detail">
                  Detailed Information
                </FieldLabel>
                <Textarea
                  {...field}
                  id="product-detail"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter detailed product information"
                  className="resize-none"
                  rows={4}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* SIZING INFO */}
          <Card>
            <CardContent className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <FieldLabel>Sizing Information</FieldLabel>
                <Button
                  type="button"
                  onClick={addSizingInfo}
                  size="sm"
                  variant="outline"
                >
                  <Plus size={16} className="mr-2" />
                  Add Size
                </Button>
              </div>

              {sizingInfo.map((_, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <Controller
                    name={`sizingInfo.${index}.size`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="flex-1"
                      >
                        <Input {...field} placeholder="Size (e.g., S, M, L)" />
                      </Field>
                    )}
                  />
                  <Controller
                    name={`sizingInfo.${index}.bodyLength`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="flex-1"
                      >
                        <Input
                          {...field}
                          placeholder='Body Length (e.g., 28")'
                        />
                      </Field>
                    )}
                  />
                  <Controller
                    name={`sizingInfo.${index}.chest`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="flex-1"
                      >
                        <Input {...field} placeholder='Chest (e.g., 38")' />
                      </Field>
                    )}
                  />
                  <Button
                    type="button"
                    onClick={() => removeSizingInfo(index)}
                    size="sm"
                    variant="destructive"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* SIZE STOCK */}
          <Card>
            <CardContent className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <FieldLabel>Stock by Size</FieldLabel>
                <Button
                  type="button"
                  onClick={addSizeStock}
                  size="sm"
                  variant="outline"
                >
                  <Plus size={16} className="mr-2" />
                  Add Size Stock
                </Button>
              </div>

              {sizeStock.map((_, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <Controller
                    name={`sizeStock.${index}.size`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="flex-1"
                      >
                        <Input {...field} placeholder="Size (e.g., S, M, L)" />
                      </Field>
                    )}
                  />
                  <Controller
                    name={`sizeStock.${index}.stock`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        className="flex-1"
                      >
                        <Input
                          {...field}
                          type="number"
                          placeholder="Stock quantity"
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </Field>
                    )}
                  />
                  <Button
                    type="button"
                    onClick={() => removeSizeStock(index)}
                    size="sm"
                    variant="destructive"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </FieldGroup>

        {/* SUBMIT BUTTON */}
        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? "Submitting..." : `${type} Product`}
        </Button>
      </form>
    </FormProvider>
  );
}
