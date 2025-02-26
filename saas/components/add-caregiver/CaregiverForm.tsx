"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FormField } from "./FormField";
import { MultiSelect } from "./MultiSelect";
import { BulkUpload } from "./BulkUpload";
import {
  formFields,
  tabOptions,
  generateNextCaregiverId,
  caregivers,
} from "@/data/add-caregiver-form";
import { useState } from "react";
import type { Caregiver } from "@/types/add-caregiver-form";

// Define the schema for form validation
const schema = z.object({
  caregiver_name: z.string().min(1, "Caregiver Name is required"),
  caregiver_id: z.string(),
  tagline: z.string().min(1, "Tagline is required"),
  photo: z.string().min(1, "Photo is required"),
  about: z.string().min(1, "About is required"),
  total_clients: z.string().min(1, "Total clients is required"),
  years_excellence: z.string().min(1, "Years of excellence is required"),
  live_in: z.string().min(1, "Live in location is required"),
  caregiver_specificity: z
    .array(z.string())
    .min(1, "At least one specificity is required"),
  key_features: z
    .array(z.string())
    .min(1, "At least one key feature is required"),
  general_features: z
    .array(z.string())
    .min(1, "At least one general feature is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof schema>;

/**
 * CaregiverForm component for adding new caregivers
 * @returns {JSX.Element} The rendered CaregiverForm component
 */
export function CaregiverForm(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [clearImage, setClearImage] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      caregiver_id: generateNextCaregiverId(),
    },
  });

  /**
   * Handles form submission
   * @param {FormData} data - The form data
   * @returns {void}
   */
  const onSubmit = (data: FormData): void => {
    setIsSubmitting(true);

    // Create a new caregiver object
    const newCaregiver: Caregiver = {
      id: data.caregiver_id,
      name: data.caregiver_name,
      tagline: data.tagline,
      photo: data.photo,
      about: data.about,
      totalClients: data.total_clients,
      yearsExcellence: data.years_excellence,
      liveIn: data.live_in,
      caregiverSpecificity: data.caregiver_specificity,
      keyFeatures: data.key_features,
      generalFeatures: data.general_features,
      email: data.email,
      password: data.password,
    };

    // Add the new caregiver to the caregivers array
    caregivers.push(newCaregiver);

    console.log("New caregiver added:", newCaregiver);
    console.log("Updated caregivers array:", caregivers);

    // Simulating an API call with setTimeout
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setClearImage(true);
      reset({
        caregiver_id: generateNextCaregiverId(),
      });
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setClearImage(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="w-full p-4 relative">
      {showSuccess && (
        <div
          className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-md z-50"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            New caregiver added successfully.
          </span>
        </div>
      )}

      <div className="w-full flex flex-col gap-6">
        <h1 className="text-h5 font-semibold">Add new caregiver</h1>

        <Tabs defaultValue="manually" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 h-fit">
            {tabOptions.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                <div className="p-3  flex flex-col gap-1 items-center justify-center cursor-pointer">
                  <p className="text-h6 text-neutral-10">{tab.title}</p>
                  <p>{tab.description}</p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="manually">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  {tabOptions[0].description}
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {formFields.map((field) => {
                    if (field.type === "select") {
                      return (
                        <Controller
                          key={field.id}
                          name={field.id as keyof FormData}
                          control={control}
                          render={({ field: { onChange, value } }) => (
                            <MultiSelect
                              label={field.label}
                              options={field.options || []}
                              maxSelect={field.maxSelect}
                              selectedValues={value || []}
                              onChange={onChange}
                              error={
                                errors[field.id as keyof FormData]?.message
                              }
                            />
                          )}
                        />
                      );
                    }
                    return (
                      <Controller
                        key={field.id}
                        name={field.id as keyof FormData}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <FormField
                            field={field}
                            value={value || ""}
                            onChange={onChange}
                            readOnly={field.id === "caregiver_id"}
                            error={errors[field.id as keyof FormData]?.message}
                            clearImage={clearImage && field.type === "file"}
                          />
                        )}
                      />
                    );
                  })}
                  <Button
                    type="submit"
                    className="w-full mt-6"
                    disabled={isSubmitting}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Adding..." : "Add new caregiver"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="bulk">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  {tabOptions[1].description}
                </p>
                <BulkUpload />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
